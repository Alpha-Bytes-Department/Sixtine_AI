import React, { useEffect, useRef, useState } from "react";

const getSupportedMimeType = (): string | undefined => {
  const candidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/ogg;codecs=opus",
    "audio/ogg",
  ];
  // @ts-ignore - older TypeScript DOM lib might not include isTypeSupported
  for (const t of candidates) {
    // @ts-ignore
    if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) {
      return t;
    }
  }
  return undefined;
};

const calcRMS = (data: Uint8Array) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    const v = (data[i] - 128) / 128;
    sum += v * v;
  }
  return Math.sqrt(sum / data.length);
};

export const AudioRecorder: React.FC = () => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);

  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [chunks, setChunks] = useState<Blob[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [level, setLevel] = useState<number>(0); // 0..1
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<any>(null);

  useEffect(() => {
    return () => {
      cleanupAll();
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startMeter = (stream: MediaStream) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      analyserRef.current = analyser;
      source.connect(analyser);

      const data = new Uint8Array(analyser.fftSize);

      const tick = () => {
        analyser.getByteTimeDomainData(data);
        const rms = calcRMS(data);
        setLevel((prev) => Math.max(0, prev * 0.75 + rms * 0.25));
        rafRef.current = requestAnimationFrame(tick);
      };
      tick();
    } catch (err) {
      console.warn("Meter failed:", err);
    }
  };

  const stopMeter = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    try {
      analyserRef.current?.disconnect();
    } catch {}
    try {
      audioCtxRef.current?.close();
    } catch {}
    analyserRef.current = null;
    audioCtxRef.current = null;
    setLevel(0);
  };

  const startRecording = async () => {
    setError(null);
    setUploadResult(null);
    setChunks([]);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mime = getSupportedMimeType();
      const options = mime ? { mimeType: mime } : undefined;
      const recorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e: BlobEvent) => {
        if (e.data && e.data.size > 0) {
          setChunks((prev) => [...prev, e.data]);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
        const url = URL.createObjectURL(blob);
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setPreviewUrl(url);
      };

      recorder.start();
      setRecording(true);
      setPaused(false);

      startMeter(stream);
    } catch (err: any) {
      console.error("startRecording error", err);
      setError("Microphone access denied or not available.");
    }
  };

  const pauseRecording = () => {
    const r = mediaRecorderRef.current;
    if (!r) return;
    if (r.state === "recording") {
      r.pause();
      setPaused(true);
    } else if (r.state === "paused") {
      r.resume();
      setPaused(false);
    }
  };

  const cleanupAll = () => {
    try {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
    } catch {}
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => {
        try {
          t.stop();
        } catch {}
      });
      streamRef.current = null;
    }
    setRecording(false);
    setPaused(false);
    stopMeter();
  };

  const stopRecording = () => {
    cleanupAll();
  };

  const downloadRecording = () => {
    if (!chunks.length) return;
    const mime = mediaRecorderRef.current?.mimeType || "audio/webm";
    const blob = new Blob(chunks, { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const ext = mime.includes("ogg") ? "ogg" : mime.includes("webm") ? "webm" : "wav";
    a.download = `recording-${Date.now()}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const uploadRecording = async (uploadUrl: string) => {
    if (!chunks.length) {
      setError("No recording to upload");
      return;
    }
    setUploading(true);
    setError(null);
    setUploadResult(null);
    try {
      const mime = mediaRecorderRef.current?.mimeType || "audio/webm";
      const blob = new Blob(chunks, { type: mime });
      const form = new FormData();
      const ext = mime.includes("ogg") ? "ogg" : "webm";
      form.append("file", blob, `recording-${Date.now()}.${ext}`);

      const res = await fetch(uploadUrl, { method: "POST", body: form });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Upload failed: ${res.status} ${text}`);
      }
      const json = await res.json();
      setUploadResult(json);
    } catch (err: any) {
      console.error("upload error", err);
      setError(err?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // Tailwind: sizes & classes tuned for a compact UI
  return (
    <div className="flex-1 p-4 bg-white/60 backdrop-blur rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Audio Recorder</h3>

      <div className="flex gap-2 mb-4">
        <button
          onClick={startRecording}
          disabled={recording}
          className="px-3 py-2 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white rounded-md text-sm"
        >
          Start
        </button>

        <button
          onClick={pauseRecording}
          disabled={!recording}
          className="px-3 py-2 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 text-white rounded-md text-sm"
        >
          {paused ? "Resume" : "Pause"}
        </button>

        <button
          onClick={stopRecording}
          disabled={!recording}
          className="px-3 py-2 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white rounded-md text-sm"
        >
          Stop
        </button>

        <button
          onClick={downloadRecording}
          disabled={!chunks.length}
          className="px-3 py-2 bg-slate-700 hover:bg-slate-800 disabled:opacity-50 text-white rounded-md text-sm"
        >
          Download
        </button>

        <button
          onClick={() => uploadRecording("/api/upload")}
          disabled={!chunks.length || uploading}
          className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-md text-sm"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* pulsing button + rings */}
      <div className="flex items-center gap-6">
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* outer ring */}
          <div
            aria-hidden
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 200,
              height: 200,
              transform: `translate(-50%,-50%) scale(${1 + level * 1.4})`,
              left: "50%",
              top: "50%",
              background: "rgba(255,99,99,0.06)",
              transition: "transform 0.08s linear, opacity 0.08s linear",
            }}
          />
          {/* mid ring */}
          <div
            aria-hidden
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 150,
              height: 150,
              transform: `translate(-50%,-50%) scale(${1 + level * 0.9})`,
              left: "50%",
              top: "50%",
              background: "rgba(255,110,110,0.08)",
              transition: "transform 0.06s linear",
            }}
          />
          {/* inner ring */}
          <div
            aria-hidden
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 110,
              height: 110,
              transform: `translate(-50%,-50%) scale(${1 + level * 0.5})`,
              left: "50%",
              top: "50%",
              background: "rgba(255,140,140,0.10)",
              transition: "transform 0.05s linear",
            }}
          />

          {/* central button */}
          <button
            onClick={() => {
              if (recording) {
                // toggle pause via pauseRecording
                pauseRecording();
              } else {
                startRecording();
              }
            }}
            className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg focus:outline-none
              ${recording ? "bg-red-500 hover:bg-red-600" : "bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"}`}
            aria-pressed={recording}
            aria-label={recording ? (paused ? "Resume recording" : "Pause recording") : "Start recording"}
          >
            {recording ? (paused ? "⏸" : "●") : "▶"}
          </button>
        </div>

        <div className="flex-1">
          <div className="text-sm text-slate-700 mb-2">
            Live level: <span className="font-medium">{(level * 100).toFixed(0)}%</span>
          </div>

          {previewUrl ? (
            <div className="space-y-2">
              <audio src={previewUrl} controls className="w-full" />
              <div className="text-xs text-slate-500">Recorded file ready. You can download or upload it.</div>
            </div>
          ) : (
            <div className="text-xs text-slate-500">No recording yet. Click Start or the big button.</div>
          )}

          {uploadResult && (
            <div className="mt-2 text-sm text-green-600">
              Upload result: <pre className="whitespace-pre-wrap text-xs">{JSON.stringify(uploadResult, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>

      {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
    </div>
  );
};

export default AudioRecorder;


import React, { useEffect, useRef, useState } from "react";
// import { FaPlay } from "react-icons/fa";
import { FaPause, FaPlay } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router";
import { useStatus } from "../../../providers/StatusProvider";

type AudioRecorderProps = {
  setRecording: React.Dispatch<React.SetStateAction<boolean>>;
};

const AudioRecord: React.FC<AudioRecorderProps> = ({ setRecording }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const audioUrl = useRef<string | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const navigate = useNavigate();
  const { isEnglish } = useStatus();

  // Start recording automatically when the component mounts
  useEffect(() => {
    startRecording();

    // Cleanup function to stop recording and release resources when the component unmounts
    return () => {
      stopRecording();
      if (streamRef.current) {
        // Stop all tracks of the stream to free the microphone
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunks.current = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) audioChunks.current.push(event.data);
    };

    mediaRecorder.start();
    setIsRecording(true);
    setIsPaused(false);
  };

  const pauseRecording = () => {
    if (!mediaRecorderRef.current) return;
    if (isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
    } else {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
    }
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return;
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    setIsPaused(false);
    // Create audio URL from the recorded blobs
    const blob = new Blob(audioChunks.current, { type: "audio/wav" });
    audioUrl.current = URL.createObjectURL(blob);
  };

  const sendAudio = async () => {
    // if (!audioUrl.current) return;
    // // Send the audio to the backend (example)
    // const formData = new FormData();
    // formData.append("audio", audioUrl.current);

    // // Replace with your actual API endpoint
    // await fetch("YOUR_BACKEND_API_URL", {
    //   method: "POST",
    //   body: formData,
    // });

    navigate("/dashboard/extract-audio");
  };

  const goBack = () => {
    setRecording(false);
  };

  return (
    <div className="w-full h-screen bg-[#4a7a9c] flex justify-center items-center relative">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="absolute top-4 right-4 text-white bg-[#5c8bab] rounded-full p-2 hover:bg-[#73a6c7] cursor-pointer"
      >
        <RxCross1 />
      </button>

      <div className="bg-[#5c8bab]/90 border border-[#73a6c7] rounded-xl p-10 text-center text-white w-[320px]">
        <div className="flex justify-center mb-4">
          <div className="waveform w-48 h-10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center animate-wave">
              <div className="bars flex  space-x-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-white rounded-sm animate-pulse "
                    style={{
                      height: `${Math.random() * 20 + 10}px`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm mb-4">
          {isEnglish ? "Recording Process..." : "Processus d'enregistrement..."}
        </p>

        {!isRecording ? (
          <p className="text-white text-sm">
            {isEnglish ? "Recording stopped" : "Enregistrement arrêté"}
          </p>
        ) : (
          <div className="flex justify-center space-x-4">
            <button
              onClick={pauseRecording}
              className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"
            >
              {isPaused ? <FaPlay /> : <FaPause />}
            </button>

            <button
              onClick={sendAudio}
              className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer"
              title={isEnglish ? "send" : "envoyer"}
            >
              <IoMdSend />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioRecord;

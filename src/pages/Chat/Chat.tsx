import { useState, useRef, useEffect } from "react";
import { IoArrowUpSharp, IoOptionsOutline } from "react-icons/io5";
import { HiOutlineMicrophone } from "react-icons/hi2";
import ChatSettings from "../ChatSettings/ChatSettings";
import { useStatus } from "../../providers/StatusProvider";
import { FaPause, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdSend } from "react-icons/io";

type Message = {
  id: number;
  sender: "user" | "bot";
  content: string;
  time: string;
  type?: "text" | "audio";
};

const randomReplies = [
  "Interesting! Tell me more about that.",
  "I see. Could you explain it a bit further?",
  "Got it! Let me think about that...",
  "That’s a good question!",
  "Thanks for sharing that with me!",
  "Hmm, that’s something I didn’t expect!",
];

const Chatbot = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [setting, setSetting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isThinking, setIsThinking] = useState(false);
  const { setPageTitle, isEnglish } = useStatus();

  console.log(isRecording);

  useEffect(() => {
    setPageTitle(isEnglish ? "Chat" : "Discussion");
  }, [isEnglish, setPageTitle]);

  // --- TEXT MESSAGE HANDLER ---
  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "user",
        content: input,
        time: new Date().toLocaleTimeString(),
        type: "text",
      };

      setMessages((prev) => [...prev, newMessage]);
      setInput("");
      if (textareaRef.current) textareaRef.current.style.height = "auto";

      // Simulate bot reply
      setIsThinking(true);
      setTimeout(() => {
        const botReply: Message = {
          id: messages.length + 2,
          sender: "bot",
          content:
            randomReplies[Math.floor(Math.random() * randomReplies.length)],
          time: new Date().toLocaleTimeString(),
          type: "text",
        };
        setMessages((prev) => [...prev, botReply]);
        setIsThinking(false);
      }, 1500);
    }
  };

  // --- RECORDING LOGIC ---
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    const chunks: Blob[] = [];

    mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/webm" });
      const audioURL = URL.createObjectURL(blob);

      // Add user audio message to chat
      const audioMsg: Message = {
        id: messages.length + 1,
        sender: "user",
        content: audioURL,
        time: new Date().toLocaleTimeString(),
        type: "audio",
      };

      setMessages((prev) => [...prev, audioMsg]);
      setIsRecording(false);
      setIsPaused(false);

      // Simulate bot reply
      setIsThinking(true);
      setTimeout(() => {
        const botReply: Message = {
          id: messages.length + 2,
          sender: "bot",
          content:
            randomReplies[Math.floor(Math.random() * randomReplies.length)],
          time: new Date().toLocaleTimeString(),
          type: "text",
        };
        setMessages((prev) => [...prev, botReply]);
        setIsThinking(false);
      }, 1500);
    };

    mediaRecorder.start();
    setIsRecording(true);
    setIsPaused(false);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
    setIsPaused(false);
  };

  const pauseRecording = () => {
    if (isPaused) {
      mediaRecorderRef.current?.resume();
      setIsPaused(false);
    } else {
      mediaRecorderRef.current?.pause();
      setIsPaused(true);
    }
  };

  // --- INPUT TEXTAREA AUTO HEIGHT ---
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && input.trim()) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (setting) return <ChatSettings setSetting={setSetting} />;

  return (
    <div className="w-full h-full flex-1 relative">
      <div className="w-full lg:max-w-xl xl:max-w-4xl flex flex-col p-4 bg-white absolute bottom-0 left-0 lg:bottom-10 xl:bottom-20 lg:left-2/12 2xl:left-3/12 max-h-[95%]">
        {/* Chat Messages */}
        <div className="flex flex-col space-y-4 overflow-y-auto overflow-hidden custom-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-[60%] ${
                  msg.sender === "user"
                    ? "bg-[#4e7ba0] text-white rounded-br-none"
                    : "bg-[#1e3c56] text-white rounded-bl-none"
                }`}
              >
                {msg.type === "audio" ? (
                  <audio controls src={msg.content} className="w-44 bg-[#4e7ba0] " />
                ) : (
                  <p>{msg.content}</p>
                )}
              </div>
            </div>
          ))}

          {/* Bot Thinking Loader */}
          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-[#1e3c56] text-white rounded-lg rounded-bl-none px-4 py-2 flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  ></motion.span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input Section */}
        <div className="flex items-center border border-[#4e7ba0] rounded-xl p-3 mt-3">
          <button
            onClick={() => setSetting(true)}
            className="p-2 text-[#4e7ba0] rounded-lg"
          >
            <IoOptionsOutline
              title={isEnglish ? "Setting" : "Paramètre"}
              className="text-lg cursor-pointer"
            />
          </button>

          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            className="w-full p-3 rounded-lg focus:outline-0 resize-none overflow-y-auto max-h-48 custom-scrollbar"
            placeholder={
              isEnglish ? "Start typing here..." : "Commencez à taper ici..."
            }
          />

          {/* Mic Button */}
          <button
            onClick={() => {
              startRecording();
              (
                document.getElementById("my_modal_3") as HTMLDialogElement
              )?.showModal();
            }}
            className="ml-2 p-2 text-[#4e7ba0] rounded-xl bg-gray-200 cursor-pointer"
          >
            <HiOutlineMicrophone className="text-lg" />
          </button>

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="ml-2 p-2 bg-[#4e7ba0] text-white rounded-xl cursor-pointer"
          >
            <IoArrowUpSharp />
          </button>
        </div>
      </div>

      {/* Recording Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-[#5c8bab]/90 border border-[#73a6c7]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="mx-auto rounded-xl p-10 text-center text-white w-[320px]">
            {/* Waveform Animation */}
            <div className="flex justify-center mb-6 relative">
              <div className="relative w-56 h-12 flex items-end justify-center space-x-[3px] overflow-hidden">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-[3px] rounded-full ${
                      isPaused
                        ? "bg-gradient-to-t from-gray-400 to-white"
                        : "bg-gradient-to-t from-[#00c6ff] to-[#0072ff]"
                    } shadow-[0_0_6px_#ffffff70]`}
                    animate={{
                      height: isPaused
                        ? `${Math.random() * 40 + 10}px`
                        : [
                            `${Math.random() * 40 + 20}px`,
                            `${Math.random() * 80 + 20}px`,
                            `${Math.random() * 40 + 20}px`,
                          ],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 0.9 + Math.random() * 0.6,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: i * 0.05,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#00c6ff33] via-[#0072ff22] to-[#00c6ff33] blur-2xl opacity-70 animate-pulse"></div>
              </div>
            </div>

            <p className="text-sm mb-5">
              {isPaused
                ? isEnglish
                  ? "Recording paused"
                  : "Enregistrement en pause"
                : isEnglish
                ? "Recording in progress..."
                : "Enregistrement en cours..."}
            </p>

            <div className="flex justify-center space-x-4">
              <button
                onClick={pauseRecording}
                className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"
              >
                {isPaused ? <FaPlay /> : <FaPause />}
              </button>

              <button
                onClick={() => {
                  stopRecording();
                  (
                    document.getElementById("my_modal_3") as HTMLDialogElement
                  )?.close();
                }}
                className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer"
                title={isEnglish ? "Send" : "Envoyer"}
              >
                <IoMdSend />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Chatbot;

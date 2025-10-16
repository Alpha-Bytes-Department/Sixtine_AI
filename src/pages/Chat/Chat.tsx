import React, { useState } from "react";
import { IoArrowUpSharp } from "react-icons/io5";
import { IoOptionsOutline } from "react-icons/io5";
import { HiOutlineMicrophone } from "react-icons/hi2";
import ChatSettings from "../ChatSettings/ChatSettings";

type Message = {
  id: number;
  sender: "user" | "bot";
  content: string;
  time: string;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [setting, setSetting] = useState(false)

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "user",
        content: input,
        time: new Date().toLocaleTimeString(),
      };

      setMessages([...messages, newMessage]);
      setInput("");
      setTimeout(() => {
        const botReply: Message = {
          id: messages.length + 2,
          sender: "bot",
          content: "This is a bot response!",
          time: new Date().toLocaleTimeString(),
        };
        setMessages((prevMessages) => [...prevMessages, botReply]);
      }, 1000); // Simulate bot response delay
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault(); // Prevent the default "Enter" key behavior (form submission)
      handleSendMessage();
    }
  };


if(setting){
    return <ChatSettings setSetting={setSetting}/>
}





//   chat component 

  return (
    <div className="w-full h-full flex-1 ">
      <div className="w-full lg:max-w-xl xl:max-w-4xl flex flex-col  p-4 bg-white  fixed bottom-5 left-0 lg:bottom-10 xl:bottom-12  lg:left-3/12 2xl:left-4/12  max-h-[95%] ">
        {/* message section  */}
        <div className="flex flex-col space-y-4 overflow-y-auto overflow-hidden custom-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-[#4e7ba0] text-white rounded-br-none"
                    : "bg-[#1e3c56] text-white rounded-bl-none"
                }`}
              >
                <p>{msg.content}</p>
                {/* <p className="text-xs text-right">{msg.time}</p> */}
              </div>
            </div>
          ))}
        </div>
        {/* bottom input section  */}
        <div className="flex items-center mt-5 border border-[#4e7ba0] rounded-xl p-3 ">
          <button
            onClick={()=>setSetting(true)}
            className=" p-2 text-[#4e7ba0] rounded-lg"
          >
            <IoOptionsOutline title="setting" className="text-lg cursor-pointer" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-3 rounded-lg focus:outline-0 "
            placeholder="Start typing here..."
          />

          <button
            onClick={handleSendMessage}
            className="ml-2 p-2 text-[#4e7ba0]  rounded-xl bg-gray-200 cursor-pointer"
          >
            <HiOutlineMicrophone className="text-lg " />
          </button>
          <button
            onClick={handleSendMessage}
            className="ml-2 p-2 bg-[#4e7ba0] text-white rounded-xl cursor-pointer"
          >
            <IoArrowUpSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

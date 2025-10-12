

const ChatHistory = () => {
  const messages = [
    {
      id: 1,
      title: "ACT (Acceptance and Commitment Therapy)",
      description: "is a form of cognitive-behavioral therapy that...........",
      time: "Today, 09:52 pm",
    },
    {
      id: 2,
      title: "ACT (Acceptance and Commitment Therapy)",
      description: "is a form of cognitive-behavioral therapy that...........",
      time: "Today, 09:52 pm",
    },
    {
      id: 3,
      title: "ACT (Acceptance and Commitment Therapy)",
      description: "is a form of cognitive-behavioral therapy that...........",
      time: "Today, 09:52 pm",
    },
    {
      id: 4,
      title: "ACT (Acceptance and Commitment Therapy)",
      description: "is a form of cognitive-behavioral therapy that...........",
      time: "Today, 09:52 pm",
    },
    {
      id: 5,
      title: "ACT (Acceptance and Commitment Therapy)",
      description: "is a form of cognitive-behavioral therapy that...........",
      time: "Today, 09:52 pm",
    },
    {
      id: 6,
      title: "ACT (Acceptance and Commitment Therapy)",
      description: "is a form of cognitive-behavioral therapy that...........",
      time: "Today, 09:52 pm",
    },
    {
      id: 7,
      title: "ACT (Acceptance and Commitment Therapy)",
      description: "is a form of cognitive-behavioral therapy that...........",
      time: "Today, 09:52 pm",
    },
    {
      id: 8,
      title: "ACT (Acceptance and Commitment Therapy)",
      description: "is a form of cognitive-behavioral therapy that...........",
      time: "Today, 09:52 pm",
    },
    // add more items if needed
  ];
  return (
    <div className="flex-1 h-full w-full">
      <div className="p-6 h-full flex flex-col max-w-5xl mx-auto gap-3 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex justify-between items-center p-4 rounded-lg cursor-pointer transition-all duration-200 bg-[#5d7487] hover:bg-gray-600 text-gray-200`}
          >
            <div>
              <p className="font-medium">
                {msg.title} {msg.description}
              </p>
              <p className="text-sm text-gray-400">{msg.time}</p>
            </div>
            <button className="text-gray-300 hover:text-white">⋯</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;

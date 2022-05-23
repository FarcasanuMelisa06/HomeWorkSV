const Message = ({ messages }) => {
  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <p key={`message-${index}`}>
          {message}
        </p>
      ))}
    </div>
  );
};

export default Message;
import { useState, useEffect } from "react";
import Message from "./message";
import MessageForm from "./messageForm";
import Notification from "./notification";

const ChatBox = ({ socket }) => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState("");
   
    const addMessage = (message) => {
        setMessages((messages) => {
            return [...messages, message];
        });
    };

    useEffect(() => {
      
        socket.on("received-info", (nam, mess) => {
            setName(nam);
            addMessage(nam + " : " + mess);
        });
    }, []);

    return (
        <>
            <Message messages={messages} />
            <MessageForm socket={socket} /> 
            <Notification socket={socket}/>      
        </>
    );
};
export default ChatBox;
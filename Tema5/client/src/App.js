import BoxQuestion from "./components/BoxQuestion";
import Question from "./components/question";
import Graph from "./components/answerGraph";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";

function App() {

  const [connectedSocket, setConnectedSocket] = useState();
  let yes = 466;
  let no = 466;
  let maybe = 466;

  useEffect(() => {
    const socket = io();

    socket.on("connected", () => {
      setConnectedSocket(socket);
    });

    socket.on("received-answer", (answer) => {
      if (answer === "yes")
       {socket.emit("update-graph", yes + 20, no - 10, maybe - 10); yes = yes + 20; no = no - 10; maybe = maybe - 10;}
      if (answer === "no") 
      {socket.emit("update-graph", yes - 10, no + 20, maybe - 10); yes = yes - 10; no = no + 20; maybe = maybe - 10; }
      if (answer === "maybe")
       {socket.emit("update-graph", yes - 10, no - 10, maybe + 20); yes = yes - 10; no = no - 10; maybe = maybe + 20; }
    });
  }, []);

  if (!connectedSocket) {
    return <p>Waiting for connection ...</p>;
  }

  return (
    <div className="App">
      <Question socket={connectedSocket} />
      <Graph socket={connectedSocket} />
      <BoxQuestion />
    </div>
  );
}

export default App;
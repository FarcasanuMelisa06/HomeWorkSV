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
       {socket.emit("update-graph", yes + 60, no - 30, maybe - 30); yes = yes + 60; no = no - 30; maybe = maybe - 30;}
      if (answer === "no") 
      {socket.emit("update-graph", yes - 30, no + 60, maybe - 30); yes = yes - 30; no = no + 60; maybe = maybe - 30; }
      if (answer === "maybe")
       {socket.emit("update-graph", yes - 30, no - 30, maybe + 60); yes = yes - 30; no = no - 30; maybe = maybe + 60; }
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
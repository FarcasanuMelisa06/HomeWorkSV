import { useEffect, useState } from "react";
const Graph = ({ socket }) => {

  const [sizeYes, setSizeYes] = useState(466);
  const [sizeNo, setSizeNo] = useState(466);
  const [sizeMaybe, setSizeMaybe] = useState(466);


useEffect(() => {

  socket.on("updated-graph", ( yes, no, maybe ) => {
   
    setSizeYes(yes);
    setSizeNo(no);
    setSizeMaybe(maybe);
});

}, []);



  return (
    <div className="graph-box">
      <div className="yes-box" style={{
      width: `${sizeYes}px`
    }}></div>
      <div className="no-box" style={{
      width: `${sizeNo}px`
    }}></div>
      <div className="maybe-box" style={{
      width: `${sizeMaybe}px`
    }}></div>
    </div>
  );
};

export default Graph;
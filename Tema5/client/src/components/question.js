import { useState } from "react";
const Question = ({socket}) => {

    const [answer, setAnswer] = useState("");
    const [check, setCheck] = useState(true);

    const handleAnswerInputChange = (e) => {
        setAnswer(e.target.value);
       
      };

    const sendAnswer = () =>{
       socket.emit("send-answer", answer);
       setCheck(false);
    };
    if(answer === "" || check === true) return(
        <div className="question-box">
                <p>Are you a developer? </p>
            <div>
            <input className="Answer"
                value={answer}
                placeholder="Enter your answer"
                type="text"
                onChange={handleAnswerInputChange}
            ></input>
            <button className = "Button" onClick={sendAnswer}>Submit</button>
            </div>
      </div>
    );

    return <p>Thank you for the answer!</p>
};

export default Question;
import { useState } from "react";
import AddButton from "./AddButton";

const Example3 = () => {

  const [Textinput, ButtonA] = useState([]);

  return (
    <div className="example">
       <h3>Example 3 - Add Button</h3>
      <br/>
     <AddButton/>
    </div>
  );
};

export default Example3;

import { useState } from "react";

const AddButton = (props) => {
  const [color, setColor] = useState("#ffffff");

  const handleClick = () => {
    props.handleClick({ color })
  };

  return (
    <>
      <div className="containerAddButton">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <button className="Button" onClick={handleClick}>
          Add</button>
      </div>
    </>
  );
};

export default AddButton;
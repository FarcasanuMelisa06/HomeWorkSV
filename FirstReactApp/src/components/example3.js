import { useState } from "react";
import AddButton from "./AddButton";
import Colors from "./Colors";

const Example3 = () => {
  const [colorCode, setColor] = useState([]);
 
    const addColorsCode = (newColor) => {
      const newColors = [...colorCode];
      newColor.id = colorCode.length;
      newColors.push(newColor);
      setColor(newColors);
    };

    const removeColor = (id) => {
      const updateColors = colorCode.filter((removeColor) => 
      removeColor.id !== id);
      setColor(updateColors);
    };

    const setGradientColor = () => {
      const updateColors = colorCode
        .map((newColor) => newColor.colorCode)
        .toString();
      switch (colorCode.length) {
        case 0:
          return colorCode;
        case 1:
          return updateColors;
        default:
          return `linear-gradient(${colorCode})`;
      }
    };

return (
  <div className="example">
    Example 3 - Add button
    <br/>
    <AddButton handleClick= {addColorsCode}/>
    <br/>
    <div className="d-flex">
      <div className="containerGradient">
      <span>Gradient Result</span>
      <div className="gradient-box"
            style={{ background: `${setGradientColor()}`}}
          ></div>
      </div>
      {colorCode.map((colorId) => (
          <Colors key = {colorId.id} {...colorId}
          handleRemove={removeColor}/>

        ))}
    </div>
  </div>
);

};

export default Example3;

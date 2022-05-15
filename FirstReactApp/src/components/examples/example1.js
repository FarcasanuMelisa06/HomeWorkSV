import Bottle from "../bottle";

const Example1 = () => {
  return (
    <div className="example">
       <h3> Example 1 - Food Product</h3> 
      <div className="d-flex">
        <Bottle liquidColor="white" etiquette = "Milk" 
        etiquetteCategory = "DairyLand" etiquettePrice = "2$"/>
        <Bottle  liquidColor="white" etiquette = "Milk"
        etiquetteCategory = "DairyLand" etiquettePrice = "2$"/>
        <Bottle liquidColor="white" etiquette = "Milk"
        etiquetteCategory = "DairyLand" etiquettePrice = "2$"/>
      </div>
    </div>
  );
};

export default Example1;

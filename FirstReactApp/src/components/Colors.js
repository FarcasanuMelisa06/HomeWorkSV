
const Colors = (props) => {

  const handleRemove = () => {
    props.handleRemove(props.id);
  };

  return (
  <div>
      <div className="BoxColor" style={{backgroundColor : props.color}}>
        {props.color}
        <div className="DeleteButton">
          {props.handleRemove && <div onClick={handleRemove}>X</div>}
        </div>
      </div>
    </div>
  );
};


export default Colors;

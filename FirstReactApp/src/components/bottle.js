import PropTypes from 'prop-types';
const Bottle = (props) => {

return (
<div className="bottle-container">
    <div className="bottle-neck"></div>
    <div className="bottle"></div>
    <div className="handle"></div>
    <div className="liquid" style={{ background: props.liquidColor }}></div>
    <div className="etiquette">{props.etiquette}</div>
    <div className="etiquettePrice">{props.etiquettePrice}</div>
    <div className="etiquetteCategory">{props.etiquetteCategory}</div>
</div>
);
};

Bottle.prototype = {
    liquidColor: PropTypes.string
}

Bottle.defaultProps = {
    liquidColor: "transparent",
    etiquettePrice: "Pret Inexistent",
    etiquetteCategory: "Categorie Inexistenta",
    etiquette: "Nume Inexistent" 
}

export default Bottle;
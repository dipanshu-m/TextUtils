import React from "react";
import PropTypes from "prop-types";
import "./stylesheets/button.css"

const Button = (props) => {
  return (
    <button
      className={"btn btn-" + props.btnColor + " mx-2 my-2"}
      onClick={props.btnFunction}
    >
      {props.btnText}
    </button>
  );
};
const handleClick = () => {
  console.log("Clicked");
};

Button.propTypes = {
  btnColor: PropTypes.string,
  btnFunction: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
};
Button.defaultProps = {
  btnColor: "Primary",
  btnFunction: handleClick(),
  btnText: "Click",
};

export default Button;

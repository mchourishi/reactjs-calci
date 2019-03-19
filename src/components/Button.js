import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };
  render() {
    const className = ["calculator-key", this.props.cls ? this.props.cls : ""];

    return (
      <div>
        <button onClick= {this.handleClick} className={className.join(" ").trim()}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  cls: PropTypes.string,
  clickHandler: PropTypes.func
};
export default Button;

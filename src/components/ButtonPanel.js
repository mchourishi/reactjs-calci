import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };
  render() {
    return (
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <Button name="AC" clickHandler={this.handleClick} />
            <Button name="⌫" clickHandler={this.handleClick} />
            <Button name="+/-" clickHandler={this.handleClick} />
            <Button name="√" clickHandler={this.handleClick} />
            <Button name="x²" clickHandler={this.handleClick} />
            <Button name="%" clickHandler={this.handleClick} />
          </div>
          <div className="digit-keys">
            <Button name="0" cls="key-0" clickHandler={this.handleClick} />
            <Button name="." clickHandler={this.handleClick} />
            <Button name="1" clickHandler={this.handleClick} />
            <Button name="2" clickHandler={this.handleClick} />
            <Button name="3" clickHandler={this.handleClick} />
            <Button name="4" clickHandler={this.handleClick} />
            <Button name="5" clickHandler={this.handleClick} />
            <Button name="6" clickHandler={this.handleClick} />
            <Button name="7" clickHandler={this.handleClick} />
            <Button name="8" clickHandler={this.handleClick} />
            <Button name="9" clickHandler={this.handleClick} />
          </div>
        </div>
        <div className="operator-keys">
          <Button name="/" clickHandler={this.handleClick} />
          <Button name="*" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} />
          <Button name="=" cls="equalkey" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func
};

export default ButtonPanel;

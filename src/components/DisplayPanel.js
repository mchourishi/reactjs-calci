import React from 'react';
import PropTypes from "prop-types";
import {Textfit} from 'react-textfit'; //This will fit the text how big or small it is.

class DisplayPanel extends React.Component {
    render() { 
        return (
            <Textfit className="calculator-display">{this.props.value}</Textfit>
        );
    }
}


DisplayPanel.propTypes = {
    value: PropTypes.string,
  };
  
 
export default DisplayPanel
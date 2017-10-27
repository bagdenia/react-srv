import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories'; 

const TextBox = ({text}) => (
  DOM.span(
    null,
    text
  )
); 

export default TextBox;

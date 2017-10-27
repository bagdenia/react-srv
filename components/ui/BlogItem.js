import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories'; 
import Img from '../ui/Img.js'
import TextBox from '../ui/TextBox.js'

const BlogItem = (props) => (
  DOM.div(
    null,
    [React.createElement(Img, 
       props.img ),
    React.createElement(TextBox, 
       {text: props.text})
    ]
  )
); 

export default BlogItem;

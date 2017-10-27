import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories'; 
import _ from 'lodash';
import BlogItem from '../ui/BlogItem.js'

const BlogList = ( { items } ) => (
  DOM.ul(
    {},
    _.map(
      items,
      (items, key) => (
        DOM.li( {key}, 
        React.createElement(BlogItem, {text: items.text, img: {src: items.src,
                                                                             width: 200,
                                                                             alt: `img${key}`
                                                                            } }))
      )
    )
  )
);

export default BlogList;

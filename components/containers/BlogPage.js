import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories'; 
import BlogList from '../ui/BlogList.js'

const posts = [
  { text: 'Bum1', key: 1, src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'},
  { text: 'Bum2', key: 2, src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'},
  { text: 'Bum3', key: 3, src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'}
 ];


class BlogPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { posts };
  }
  
  render() {
    const{ posts } = this.state;
    return React.createElement(BlogList, {items: posts})
    }
}

export default BlogPage;

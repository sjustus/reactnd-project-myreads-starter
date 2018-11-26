import React from 'react'

class BookshelfChanger extends React.Component {
  render() {
    return (
      /*
       * Set value to the value of book.shelf or "none" if not on shelves
       * onChange call handleChange function passing book and event target
       * use arrow function in onChange to pass params and bind this to instance [Passing Functions to Components](https://reactjs.org/docs/faq-functions.html)
       * For how to pass event.target.value as param [Tutorial Requests: FEND Project 6 - Walk Through (LONG)](https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be)
      */
      <select value={this.props.book.shelf || "none"}  onChange={(event) => {this.props.handleChange(this.props.book, event.target.value)}}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default BookshelfChanger

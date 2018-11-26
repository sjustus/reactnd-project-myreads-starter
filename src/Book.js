import React from 'react'
import BookshelfChanger from './BookshelfChanger'

class Book extends React.Component {

  render() {
    //console.log('Props', this.props);

    return (
      <li>
        <div className="book">
          <div className="book-top">
          {/*
            *imageLinks are object w/ props that contain urls - use template literal to grab url as string *
            *w/help form Camille B. on Slack helped me figure that I need a check first
            *check for imageLinks object, if imageLinks, get thumbnail, else display "No image"
          */}
            <div
              className="book-cover"
              style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : 'No image available'}")`}}>
            </div>

            <div className="book-shelf-changer">
              <BookshelfChanger books={this.props.books} book={this.props.book} key={this.props.book.id} handleChange={this.props.handleChange}/>
            </div>
          </div>

          <div className="book-title">{this.props.book.title}</div>
          {/* Authors prop is array - 1st check if author, if yes display first, if no display 'No author...'*/}
          <div className="book-authors">{this.props.book.authors ? this.props.book.authors[0] : 'No author available'}</div>
        </div>
      </li>
    )
  }
}

export default Book

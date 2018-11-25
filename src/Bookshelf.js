import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {

  render() {
    //log props to see details
    //console.log("Props", this.props);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* Map over books array and render book component for each - Pass Data with Props Udacity lesson for help with concept & syntax*/}
            {this.props.books.map((book, key) => <Book book={book} key={book.id} handleChange={this.props.handleChange}/>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf

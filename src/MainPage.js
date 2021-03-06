import React from 'react'
import SearchButton from './SearchButton'
import Bookshelf from './Bookshelf'

class MainPage extends React.Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
          {/*
            *Filter through books on shelves to display books with matching shelf property
            *For which method to use & filter syntax (article): 'Array, Map, Filter, and Reduce in JS by John Ferris '[https://atendesigngroup.com/blog/array-map-filter-and-reduce-js]
          */}
            <Bookshelf
              shelf="Currently Reading"
              books={this.props.books.filter((book) => (book.shelf === "currentlyReading"))}
              handleChange={this.props.handleChange}
            />
            <Bookshelf
              shelf="Want to Read"
              books={this.props.books.filter((book) => (book.shelf === "wantToRead"))}
              handleChange={this.props.handleChange}
            />
            <Bookshelf
              shelf="Read"
              books={this.props.books.filter((book) => (book.shelf === "read"))}
              handleChange={this.props.handleChange}
            />
          </div>
        </div>

        {/* Extract Search button to clean up mainpage */}
        <SearchButton />
      </div>
    )
  }
}

export default MainPage

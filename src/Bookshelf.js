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
            {/*
              * Map over books array and render book component for each - [React Lesson 3 - State Management - Pass Data with Props] (https://classroom.udacity.com/nanodegrees/nd001/parts/f4471fff-fffb-4281-8c09-2478625c9597/modules/82766b2b-1870-4904-aa90-8ccbe63928c5/lessons/14331e60-a548-4cfb-a326-054545da8927/concepts/6bc1e32e-089d-43ec-aef4-f83b9f7d37cc) map concept & help w/syntax
              * remove unnecessary key parameter -- reviewer suggestion
              */}
            {this.props.books.map((book) => <Book book={book} key={book.id} handleChange={this.props.handleChange}/>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf

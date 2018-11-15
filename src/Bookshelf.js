import React from 'react'

class Bookshelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf

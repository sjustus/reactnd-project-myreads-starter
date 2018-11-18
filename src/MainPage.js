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
            <Bookshelf shelf="Currently Reading" books={this.props.books}/>
            <Bookshelf shelf="Want to Read" books={this.props.books} />
            <Bookshelf shelf="Read" books={this.props.books}/>
          </div>
        </div>

        {/* Extract Search button to clean up mainpage */}
        <SearchButton />
      </div>
    )
  }
}

export default MainPage

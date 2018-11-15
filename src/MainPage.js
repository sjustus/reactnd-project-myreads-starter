import React from 'react'
import SearchButton from './SearchButton'

class MainPage extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>

          </div>
        </div>

        {/* Extract Search button to clean up mainpage */}
        <SearchButton />
      </div>
    )
  }
}

export default MainPage

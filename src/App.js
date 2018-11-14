import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <MainPage />
      </div>
    )
  }
}

export default BooksApp

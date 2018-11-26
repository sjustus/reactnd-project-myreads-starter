import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  // use constructor when initializing state
  constructor(props) {
    super(props);
    // set state of books in App to pass to MainPage and SearchPage
    this.state = {
      books: [],
    }
  }

  // once the component mounts
  componentDidMount() {
    // get books from the BooksAPI - returns an array of books
    BooksAPI.getAll()
    // set the state of books to response
    // Reference: https://reactjs.org/docs/state-and-lifecycle.html (syntax)
    .then((resp) => {
      this.setState({
        books: resp
      }); // end syntax from react.js
      //console.log(this.state.books);
    });

  }


  /*
   * pass handleChange function down from App.js so it is available on MainPage and SearchPage
   * handleChange is called when select value changes
   * call update on BooksAPI to update bookshelf -- update moves books
   * call getall on BooksAPI to get new array of books with updated shelf
   * Demo of BooksAPI using Postman (for help understanding BooksAPI update function): [My Reads - Going Over BookAPI] (https://www.youtube.com/watch?v=oMsIw254rdk)
   * for help calling getAll again after calling update [Tutorial Requests: FEND Project 6 - Walk Through (LONG)](https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be)
  */
  handleChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((resp) => {
      BooksAPI.getAll()
      .then((resp) => {
        this.setState({
          books: resp
        })
      });
     });
  }

  render() {
    return (
      <div className="app">
        {/* use render to pass props to rendered components - React Router docs [https://reacttraining.com/react-router/web/guides/basic-components]*/}
        <Route exact path="/" render={(props) => <MainPage books={this.state.books} handleChange={this.handleChange}/>} />
        <Route path="/search" render={(props) => <SearchPage books={this.state.books} handleChange={this.handleChange} />} />
      </div>
    )
  }
}

export default BooksApp

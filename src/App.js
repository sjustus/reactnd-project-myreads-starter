import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'

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
    // set the state of books to response & console.log books
    // Reference: https://reactjs.org/docs/state-and-lifecycle.html & Udacity videos (React)
    .then((resp) => {
      this.setState({
        books: resp
      });
      console.log(this.state.books);
    }); // then

  }


  /*
   * pass handleChange function down from App.js so it is available on MainPage and showSearchPage
   * handleChange is called when select value changes
   * call update on BooksAPI to update bookshelf
   * call getall on BooksAPI to get new array of books with updated shelf
   * for help understanding BooksAPI update function: [https://www.youtube.com/watch?v=oMsIw254rdk]
   * for some help understanding concept [Tutorial Requests: FEND Project 6 - Walk Through (LONG)](https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be)
  */
  handleChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
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
      {/*  <Route path="/search" component={Search} />*/}
      </div>
    )
  }
}

export default BooksApp

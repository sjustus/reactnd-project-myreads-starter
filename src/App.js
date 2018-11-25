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
    // Reference: https://reactjs.org/docs/state-and-lifecycle.html (syntax) & (concept) [Render UI w/ External Date] (https://classroom.udacity.com/nanodegrees/nd001/parts/f4471fff-fffb-4281-8c09-2478625c9597/modules/82766b2b-1870-4904-aa90-8ccbe63928c5/lessons/ceb0042f-3e00-4bd2-a1d4-7746ec9c138a/concepts/0147fcd7-284c-4d98-bfb6-baa843a52cd2)
    .then((resp) => {
      this.setState({
        books: resp
      }); // end syntax from react.js
      console.log(this.state.books);
    }); // then

  }


  /*
   * pass handleChange function down from App.js so it is available on MainPage and showSearchPage
   * handleChange is called when select value changes
   * call update on BooksAPI to update bookshelf
   * call getall on BooksAPI to get new array of books with updated shelf
   * Demo of BooksAPI using Postman (for help understanding BooksAPI update function): [My Reads - Going Over BookAPI] (https://www.youtube.com/watch?v=oMsIw254rdk)
   * for idea to call getAll again after calling update [Tutorial Requests: FEND Project 6 - Walk Through (LONG)](https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be)
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

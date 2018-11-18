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

  render() {
    return (
      <div className="app">
        {/* use render to pass props to rendered components - React Router docs [https://reacttraining.com/react-router/web/guides/basic-components]*/}
        <Route exact path="/" render={(props) => <MainPage books={this.state.books} />} />
      {/*  <Route path="/search" component={Search} />*/}
      </div>
    )
  }
}

export default BooksApp

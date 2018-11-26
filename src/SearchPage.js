import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    // set state of books, query and (query) results
    this.state = {
      books: [],
      query: '', // set to empty string
      results: [], // results resp returns array
    }
  }

  // get books from MainPage to be able to compare to books on shelf
  // books state does get passed from MainPage to SearchPage
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

  // function to update query state on input change
  updateQuery = (query) => {
    // set query state to query input
    this.setState({
      query: query
    });
    console.log(query);
    // if there is a query call showResults
    if (query) {
      this.getResults();
      // if there isn't a query, clear results by set state to empty array
    } else {
      this.setState({
        results: []
      });
    }
  }

  getResults() {
    // call search on BooksAPI taking in query
    BooksAPI.search(this.state.query)
    .then((resp) => {
      // if the resp returns an error, set results to an empty array (clear results)
      if (resp.error) {
        return this.setState({
          results: []
        });
        // otherwise set results to books returned in the response
      } else {
        console.log(resp);
        return this.setState({
          results: resp
        });
      }
    });
  }

  render() {
    /*
     * map over results and for each result
     * filter through books on bookshelves and look for a book with matching id
     * store matching book in array called match
    */
    this.state.results.map((result) => {
      const match = this.state.books.filter(book => book.id === result.id);
      //console.log(match);
      if (match.length === 1) {
        console.log(match);
        console.log(result);
        return result.shelf = match[0].shelf
      }
    });

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/* set value to this.state.query & onchange pass event.target.value as param to updateQuery as query */}
            <input value={this.state.query} onChange={(event) => {this.updateQuery(event.target.value)}} type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* map over results and display a book for each*/}
            {this.state.results.map((book, shelf, key) => <Book book={book} key={book.id} handleChange={this.props.handleChange} shelf={this.props.shelf}/>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
//receive query input
// call updateQuery on input change
// if there is a query call function to get results
// if there is no query, clear results by seting state to empty Array
// when showResults is called
// call search on BooksAPI
// if the resp returns an error
// set results to empty Array
// if there no error, set results to book in resp.
// map over each result
// compare each result and check if it is on bookshelves
// if it is set book

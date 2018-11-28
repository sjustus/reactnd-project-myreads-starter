import React from 'react'
import { Link } from 'react-router-dom'

/*
  * reviewer suggestion -- convert to stateless functional component since component does not use state
*/

const SearchButton = ({searchButton}) => {
  return (
    <div className="open-search">
      <Link to='/search'>Add a book</Link>
    </div>
  )
}


export default SearchButton

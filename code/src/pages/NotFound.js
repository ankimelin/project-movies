import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="not-found">
      <img className="icon" src='https://cdn1.iconfinder.com/data/icons/the-movies/100/movie-06-512.png' alt='popcorn'></img>
      <h3>Oh no, something went wrong!</h3>
      <Link to='/'>
        <h3>
          Back to movies, please
      </h3>
      </Link>
    </div>
  )
}
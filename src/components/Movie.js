import React from 'react'

class Movie extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.movieTitle}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.posterImage}`}
        />
        <p>{this.props.overview}</p>
      </>
    )
  }
}

export default Movie

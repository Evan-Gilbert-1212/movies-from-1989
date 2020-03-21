import React from 'react'
import blankPoster from '../images/no-poster-available.jpg'

class Movie extends React.Component {
  render() {
    let posterImage
    let movieDescription

    if (this.props.posterImage != null) {
      posterImage = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.posterImage}`
    } else {
      posterImage = blankPoster
    }

    if (this.props.overview != '') {
      movieDescription = `${this.props.overview}`
    } else {
      movieDescription = 'No Description Available'
    }

    return (
      <>
        <article>
          <h2>{this.props.movieTitle}</h2>
          <img src={posterImage} />
          <p>{movieDescription}</p>
        </article>
      </>
    )
  }
}

export default Movie

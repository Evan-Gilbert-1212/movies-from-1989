import React from 'react'
import Movie from './Movie'

export class MovieSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      movieList: [],
    }
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=10506c5544808670e3badceef4b19cd4'
    )
      .then(result => result.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            movieList: result.results,
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  render() {
    const { error, isLoaded, movieList } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <section>
          {movieList.map(movie => {
            return (
              <Movie
                movieTitle={movie.title}
                posterImage={movie.poster_path}
                overview={movie.overview}
              />
            )
          })}
        </section>
      )
    }
  }
}

export default MovieSection

import React from 'react'
import Movie from './Movie'

export class MovieSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      movieList: [],
      movieListFilter: '',
      sortBy: 'release_date',
    }
  }

  componentDidMount() {
    console.log(this.state.sortBy)
    fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=${this.state.sortBy}.desc&api_key=10506c5544808670e3badceef4b19cd4`
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

  filterMovieList = e => {
    this.setState({
      movieListFilter: e.target.value,
    })

    console.log(e.target.value)
    console.log(this.state.movieListFilter)
  }

  sortMovieList = e => {
    this.setState(
      {
        sortBy: e.target.value,
      },
      () => {
        this.componentDidMount()
      }
    )
  }

  render() {
    const { error, isLoaded, movieList, movieListFilter } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <>
          <section className="filter-box">
            <p>Filter: </p>
            <input
              type="text"
              onChange={this.filterMovieList}
              placeholder="Filter..."
            ></input>
            <p>Sort By: </p>
            <select className="sort-by" onChange={this.sortMovieList}>
              <option value="release_date">Release Date</option>
              <option value="popularity">Popularity</option>
            </select>
          </section>
          <section className="movie-section">
            {movieList
              .filter(movie =>
                movie.title
                  .toLowerCase()
                  .includes(movieListFilter.toLowerCase())
              )
              .map(movie => {
                return (
                  <Movie
                    movieTitle={movie.title}
                    posterImage={movie.poster_path}
                    overview={movie.overview}
                  />
                )
              })}
          </section>
        </>
      )
    }
  }
}

export default MovieSection

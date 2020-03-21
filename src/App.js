import React from 'react'
import MovieSection from './components/MovieSection'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <MovieSection />
      </main>
    )
  }
}

export default App

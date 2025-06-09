import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import MovieList from './MovieList.jsx'
import Footer from './Footer.jsx'
import MovieData from "./data/data.js"

const App = () => {
  return (
    <div className="App">
      <Header />
      <MovieList data={MovieData} />
      <Footer />
    </div>
  )
}

export default App

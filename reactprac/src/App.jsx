import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import NavBar from './components/NavBar';
import BooksPage from './pages/Books';
import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
import GiphyPage from './pages/GiphyPage'

function App() {
  return (
    <>
      <NavBar />
      {/* <BookList /> */}
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/book" element={<BooksPage />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/giphy" element={<GiphyPage />} />
        {/* <Route path="/favorites" element={<BooksPage/>}/> */}
      </Routes>
    </>
  )
}

export default App;

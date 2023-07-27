import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import BookList from './components/BookList'

function App() {
  return (
    <>
      <Header title="Xhes Book list" />
      {/* <BookList /> */}
      <Routes>
        <Route path="/book" element={<BookList />} />

      </Routes>
    </>
  )
}

export default App

import React from 'react';
import BoardArea from './board/BoardArea'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <h1>Sudoku Solver</h1>
      <h3>(Please note: This page is now available at <a href="http://sudoku.kellygemmill.com">sudoku.kellygemmill.com</a>)</h3>
      <BoardArea />
      <Footer />
    </div>
  )
}

export default App;

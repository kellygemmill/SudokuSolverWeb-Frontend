import React from 'react'
import Square from './Square'

const SudokuBoard = ( {sudokuValue,boardLength,handleSudokuField} ) => {
    
    const style = {
        border: "4px solid black",
        height: `${boardLength*40 + 8}px`,
        width: `${boardLength*40 + 8}px`,
        margin: "0 auto",
        display: "grid",
        gridTemplate: `repeat(${boardLength}, 1fr) / repeat(${boardLength}, 1fr)`
    };
    
    return (
        <div style={style}>
            {sudokuValue    
            .map(value => value==="0" ? " " : value)
            .map((value,idx) => <Square key={idx} value={value} handleSquareValue={handleSudokuField} id={idx} />)}
        </div>
    )



}

export default SudokuBoard
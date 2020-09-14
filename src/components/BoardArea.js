import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SudokuBoard from './SudokuBoard'
import MyButton from './MyButton'
import MyDropdown from './MyDropdown'
import Directions from './Directions'
import Solution from './Solution'
import LargeBoardDirections from './LargeBoardDirections'

const BoardArea = () => {

    const [boardLength,setBoardLength] = useState(9)
    const [boardSize,setBoardSize] = useState(boardLength*boardLength)
    const [sudokuBoard, setSudokuBoard] = useState(new Array(boardSize).fill(''))
    const [solutionFound,setSolutionFound] = useState("")

    useEffect(() => {
        setBoardSize(boardLength*boardLength)
    },[boardLength])

    useEffect(() => {
        setSudokuBoard(new Array(boardSize).fill(''))
    },[boardSize])

    const convertToInt = value => {
        if (/\d/g.test(value)) {
            return parseInt(value)
        }
        if (value === "") {
            return 0
        }
        return value.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 10
    }

    const convertToChar = value => {
        if (value == 0) {
            return ""
        }
        if (value < 10) {
            return value
        }
        return String.fromCharCode(value - 10 + "A".charCodeAt(0))
    }

    const solvePuzzle = () => {
        const originalPuzzle = sudokuBoard.map(value => convertToInt(value))
        console.log(originalPuzzle[0])
        const requestBody = {
            original: originalPuzzle
        }

        axios
            .post('https://mighty-hamlet-94209.herokuapp.com/sudoku/solve', requestBody)
            .then(response => {
                setSudokuBoard(response.data.solution.map(value => convertToChar(value)))
                if (response.data.solved) {
                    setSolutionFound("Puzzle solved!")
                } else {
                    setSolutionFound("No solution found. Check input puzzle and try again.")
                }
            })
    }

    const resetPuzzle = () => {
        setSudokuBoard(new Array(boardSize).fill(''))
        setSolutionFound("")
    }

    const resetPuzzleSize = (event) => {
        setBoardLength(event.target.value)
        setSolutionFound("")
    }

    const handleSudokuInput = (event) => {
        const newValues = [...sudokuBoard]
        const id = event.target.id
        const value = event.target.value.charAt(0)
        newValues[id] = value
        setSudokuBoard(newValues)
    }

    const style = {
        position: "static",
        height: "auto",
        width: `${boardLength*40+100}px`,
        margin: "10px auto",
        textAlign: "center"
    }

    return (
        <div style={style}>
            
            <MyDropdown handleClick={resetPuzzleSize} />
            <LargeBoardDirections boardLength={boardLength} />
            <SudokuBoard sudokuValue={sudokuBoard} boardLength={boardLength} handleSudokuField={handleSudokuInput} />
            <div>
            <MyButton id="solve-button" text="Solve!" handleClick={solvePuzzle} type="primary" /> {' '}
            <MyButton id="reset-button" text="Reset Puzzle" handleClick={resetPuzzle} type="secondary" />
            </div>
            <Solution solutionFound={solutionFound} />
            <Directions />
        </div>
    )
}

export default BoardArea
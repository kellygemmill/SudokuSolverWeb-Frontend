import React from 'react'
import Button from 'react-bootstrap/Button'

const style = {
    position: 'static',
    marginTop: '30px',
    textAlign: 'center'
}

const Footer = () => {
    return (
        <div style={style}>
            <p style={{marginBottom: "0", fontWeight: "bold"}}>Source code available on Github</p>
            <Button variant="link" href="https://github.com/kellygemmill/SudokuSolverWeb-Frontend">Frontend</Button>
            <Button variant="link" href="https://github.com/kellygemmill/SudokuSolverWeb-Backend">Backend</Button>
            
            <p style={{marginTop: "20px"}}>&copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/kelly-gemmill">Kelly Gemmill</a></p>
        </div>
    )
}

export default Footer
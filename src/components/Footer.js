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
            <p style={{marginBottom: "0"}}>Source code available on Github:</p>
            <Button variant="link" href="https://github.com/kellygemmill/SudokuSolverWeb-Frontend">Frontend</Button>
            <Button variant="link" href="https://github.com/kellygemmill/SudokuSolverWeb-Backend">Backend</Button>
            
            <p style={{marginTop: "15px"}}>&copy; 2020 <a href="https://www.linkedin.com/in/kelly-gemmill">Kelly Gemmill</a></p>
        </div>
    )
}

export default Footer
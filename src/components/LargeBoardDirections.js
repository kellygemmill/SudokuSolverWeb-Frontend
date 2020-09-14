import React from 'react'

const LargeBoardDirections = ({boardLength}) => {
    if (boardLength <10) {
        return <div></div>
    }
    return (
        <div style={{fontWeight: "bold", margin: "5px", fontSize: "15px"}}>
            Input numbers greater than 9 as capital letters (10 = A, 11 = B, etc.).
        </div>
    )
}

export default LargeBoardDirections
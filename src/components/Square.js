import React from 'react'

   

    // const style = {
    //     background: "white",
    //     border: "0px",
    //     fontSize: "25px",
    //     fontWeight: "700",
    //     cursor: "pointer",
    //     outline: "none",
    //     width: "40px",
    //     height: "40px",
    //     textAlign: "center",
    //     verticalAlign: "middle",
    //     padding:0   
        
    // };

    const Square = ({ value,handleSquareValue,id,boardLength,subBoxLength,squareSize,narrowBorder,mediumBorder,thickBorder }) => {
        const boxRowIdx = Math.floor(id/boardLength) % subBoxLength
        const boxColIdx = id % subBoxLength
        const rowIdx = Math.floor(id/boardLength)
        const colIdx = id % boardLength
                    
        const style = {
            borderColor: "black",
            borderStyle: "solid",
            borderTopWidth:    `${rowIdx === 0             ? thickBorder : boxRowIdx === 0              ? mediumBorder : narrowBorder}px`,
            borderBottomWidth: `${rowIdx === boardLength-1 ? thickBorder : boxRowIdx === subBoxLength-1 ? mediumBorder : narrowBorder}px`,
            borderLeftWidth:   `${colIdx === 0             ? thickBorder : boxColIdx === 0              ? mediumBorder : narrowBorder}px`,
            borderRightWidth:  `${colIdx === boardLength-1 ? thickBorder : boxColIdx === subBoxLength-1 ? mediumBorder : narrowBorder}px`,
            width: `${colIdx === 0 || colIdx === boardLength-1 ? squareSize + thickBorder : 
                boxColIdx === 0 || boxColIdx === subBoxLength-1 ? squareSize + mediumBorder : 
                squareSize + narrowBorder}px`,
            height: `${rowIdx === 0 || rowIdx === boardLength-1 ? squareSize + thickBorder : 
                boxRowIdx === 0 || boxRowIdx === subBoxLength-1 ? squareSize + mediumBorder : 
                squareSize + narrowBorder}px`,
            background: "white",
            fontSize: "25px",
            fontWeight: "700",
            cursor: "pointer",
            outline: "none",
            textAlign: "center",
            verticalAlign: "middle"
        }

        return(
            <div>
                <input style={style} onChange={handleSquareValue} value={value} id={id} />
            </div>
        )
}

export default Square
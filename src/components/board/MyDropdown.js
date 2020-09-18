import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const MyDropdown = ({ handleClick }) => {

    const style = {
        marginBottom: "15px",
        marginRight: "0px",
    }

    const buttonStyle = {
        width: "85px"
    }

    return (
        <div>
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>Change puzzle size:</p>
            <ButtonGroup aria-label="Board size" style={style}>
                <Button style={buttonStyle} variant="outline-dark" value="4" onClick={handleClick}>4 x 4</Button>
                <Button style={buttonStyle} variant="outline-dark" value="9" onClick={handleClick}>9 x 9</Button>
                <Button style={buttonStyle} variant="outline-dark" value="16" onClick={handleClick}>16 x 16</Button>
            </ButtonGroup>
        </div>

        // <DropdownButton id="puzzle-size" title="Select a puzzle size" style={style}>
        //     <Dropdown.Item eventKey="4" onSelect={handleClick}>4 x 4</Dropdown.Item>
        //     <Dropdown.Item eventKey="9" onSelect={handleClick}>9 x 9 (Default)</Dropdown.Item>
        //     <Dropdown.Item eventKey="16" onSelect={handleClick}>16 x 16</Dropdown.Item>
        //     <Dropdown.Item eventKey="25" onSelect={handleClick}>25 x 25</Dropdown.Item>
        // </DropdownButton>
    )
}

export default MyDropdown
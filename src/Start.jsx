import React from "react"

export default function Start(props) { 
    return (
        <div className="StartContainer">
            <h1>Kwizzcal</h1>
            <h2>Test your knowledge</h2>
            <button className="StartBtn" onClick={props.handleClick}>Click to start</button>
        </div>
    )
}
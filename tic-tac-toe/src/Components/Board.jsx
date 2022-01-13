import React, {useState} from 'react';
import Square from "./Square";

function Board() {
    const [player, setPlayer] = useState(1);
    let status = `Player ${player}`

    const handleClick = (i) => {
        console.log(i);
    }

    const createSquares = () => {
        let squares = [];
        for (let i = 0; i < 9; i++) {
            squares.push(<Square key={i} id={i} player={player} value={i} onClick={() => handleClick(i)}/>);
        }
        return squares;
    }

    return (
        <div className="game-board"
             onClick={() => {
                 setPlayer((player + 1) % 2);
             }}>
            <div className="buttons-grid">
                {createSquares()}
            </div>
            <div className="info">
                <h1>{status}</h1>
            </div>
        </div>
    );
}

export default Board;
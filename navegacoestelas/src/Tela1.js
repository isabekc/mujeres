import React from "react";

function Tela1({onClick}) {
    return (
        <div className="tela-container tela2">
            <h1>Tela 1</h1>
            <button onClick={onClick}>Ir para Tela 2</button>
        </div>
    );
}

export default Tela1;

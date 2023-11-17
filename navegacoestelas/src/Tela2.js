import React from "react";

function Tela2 ({onClick}) {
    return(
        <div className="tela-container tela1">
            <h1>Tela 2</h1>
            <button onClick={onClick}>Ir para Tela 1</button>
        </div>
    );
}

export default Tela2;
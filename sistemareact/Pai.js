import React from "react";
import Filho from './Filho'

function Pai(){

    return(


        <div>

            <h1> Componete pai</h1>
            <Filho nome="Robson" ideade={25}/>

        </div>
    )
}

export default Pai;
import React, {Component} from 'react';

class Contador extends Component{

    constructor(props){

        super(props);
        this.state = {

        contado: 0,

        }
    }

    render(){

        return(

            <div>

                <p>Contagem: {this.state.contador}</p>
                <button onClick={() => this.setState({contador : this.state.contador + 1 })}> incrementar </button>
                
            </div>
        )
    }
}


export default Contador;
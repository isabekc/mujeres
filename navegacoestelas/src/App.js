import React, {useState} from 'react'
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import './App.css'

function App(){
  const [tela, setTela] = useState(1);

  const trocarTela= () => {
    if (tela === 1){
      setTela(2);
  }else{
    setTela(1);
  }
}

return (
  <div className='app-container'>
    {tela === 1 ?(
      <Tela1 onClick = {trocarTela}/>
) : (
    <Tela2 onClick={trocarTela}/>
)}
</div>
);
}

export default App;    
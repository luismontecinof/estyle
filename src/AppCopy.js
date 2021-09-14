import logo from './assets/img/logo.svg';
import './App.css';
import AcceptButton from './components/AcceptButton/AcceptButton';
import CancelButton from './components/CancelButton/CancelButton';

import { useState } from 'react';

function App() {

  //const misEstilos = {color: 'blue'};

  const [styleFlag, setStyleFlag] = useState(false);

  const changeFlag = () => {
    setStyleFlag((prevState) => !prevState);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<AcceptButton buttonStyle={{color: 'green'}} title="Boton"/>*/}
        {/*<AcceptButton buttonStyle={misEstilos} title="Aceptar" />*/}
        <button onClick={changeFlag}>Cambiar Aceptar</button>
        <AcceptButton changeColor={styleFlag} title="Aceptar" />
        <CancelButton title="Cancelar" />
      </header>
    </div>
  );
}

export default App;

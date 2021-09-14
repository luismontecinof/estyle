import logo from './assets/img/logo.svg';
import './App.css';
import AcceptButton from './components/AcceptButton/AcceptButton';
import CancelButton from './components/CancelButton/CancelButton';
import Layout from './components/Layout/Layout';
import { useState } from 'react';

function App() {

  return (
    <Layout>
      <div>
        <h1>This is the body!</h1>
        <h2>Other component</h2>
      </div>
    </Layout>
  );
}

export default App;

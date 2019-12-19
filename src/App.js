import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Modal from './components/Modal';

function App() {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className="App">
      <button type="button" onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
      {
        isOpen &&
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} width="500px">
          <h1>Test Headline</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
          <button onClick={() => setIsOpen(false)}>Close Modal</button>
        </Modal>
      }
    </div>
  );
}

export default App;

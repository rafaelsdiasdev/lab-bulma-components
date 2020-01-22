import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import FormField from './components/formField.js'
import Container from './components/Container.js'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <Container title="Hello World" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." strong="Pellentesque risus mi"></Container>
    </div>
  );
}

export default App;

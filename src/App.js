import React from 'react';
import CardList from './CardList';
import './App.css';
import { characters } from './Characters';



function App() {
  return ( <CardList characters = { characters } />  );
}

export default App;

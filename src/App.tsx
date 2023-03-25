import React from 'react';
import logo from './logo.svg';
import HomePage from './views/HomePage';
import './App.css';
import Header from './components/header';

function App() {
     return (
          <div className='App'>
               <Header />
               <header className='App-header'></header>
               <HomePage></HomePage>
          </div>
     );
}

export default App;

import React from 'react';
import HomePage from './views/HomePage';
import './App.css';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Favorites from './views/favorites';

function App() {
     return (
          <div className='App'>
               <Header />
               <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/favorites' element={<Favorites />} />
               </Routes>
          </div>
     );
}

export default App;

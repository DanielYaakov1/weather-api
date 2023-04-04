import React, { useState } from 'react';
import HomePage from './views/HomePage';
import './App.css';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Favorites from './views/favorites';
import { ILocation } from './views/HomePage/HomePage';
//   {
//                key: '215854',
//                name: 'Tel Aviv',
//                country: 'Israel',
//           },

function App() {
     const [favorites, setFavorites] = useState<ILocation[]>([]);

     return (
          <div className='App'>
               <Header />
               <Routes>
                    <Route path='/' element={<HomePage favorites={favorites} setFavorites={setFavorites} />} />
                    <Route path='/favorites' element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
               </Routes>
          </div>
     );
}

export default App;

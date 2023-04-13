import React, { useState } from 'react';
import HomePage from './views/HomePage';
import './App.css';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Favorites from './views/favorites';
import { ILocation } from './types/weatherForecast';

function App() {
     const [favorites, setFavorites] = useState<ILocation[]>([]);
     const isFavorite = !!favorites.find(favorite => favorite.Key === favorites[0]?.Key);

     return (
          <div className='App'>
               <Header />
               <div
                    style={{
                         minWidth: '100%',
                         minHeight: '100vh',
                         background: '#daf2ebf0',
                    }}>
                    <Routes>
                         <Route path='/' element={<HomePage favorites={favorites} setFavorites={setFavorites} />} />
                         <Route path='/favorites' element={<Favorites favorites={favorites} setFavorites={setFavorites} isFavorite={isFavorite} />} />
                    </Routes>
               </div>
          </div>
     );
}

export default App;

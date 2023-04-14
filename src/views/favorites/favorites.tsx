import { useEffect, useState } from 'react';
import { CurrentWeatherCard } from '../../components/card/current-weather-card';

import useStyles from './useStyles';
import useWeatherAction from '../../actions/useWeatherAction';
import React from 'react';
import { ICurrentWeather, ILocation } from '../../types/weatherForecast';

interface IFavorites {
     favorites: ILocation[];
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
     isFavorite: boolean;
}

export const Favorites = ({ favorites, setFavorites, isFavorite }: IFavorites) => {
     const classes = useStyles();
     const { getCurrentWeather } = useWeatherAction();
     const [currentWeather, setCurrentWeather] = useState<ICurrentWeather[]>([]);

     useEffect(() => {
          const fetchCurrentWeather = async () => {
               const weatherPromises = favorites.map((location: ILocation) => {
                    return getCurrentWeather(location.Key);
               });
               const weatherData = await Promise.all(weatherPromises);
               setCurrentWeather(weatherData as any);
          };
          fetchCurrentWeather();
     }, [favorites, getCurrentWeather]);

     const handleFavorite = React.useCallback(
          (selectedLocation: ILocation) => {
               if (isFavorite) {
                    setFavorites((prevFavorites: ILocation[]) => prevFavorites.filter(favLocation => favLocation.Key !== selectedLocation.Key));
               } else {
                    setFavorites((prevFavorites: ILocation[]) => [...prevFavorites, selectedLocation]);
               }
          },
          [isFavorite, setFavorites]
     );

     return (
          <>
               {favorites.length ? (
                    <div
                         style={{
                              display: 'flex',
                         }}>
                         {favorites.map((favoritesLocation: ILocation, i: number) => {
                              return (
                                   <div key={i}>
                                        <h2>{favoritesLocation.name}</h2>
                                        {currentWeather[i] &&
                                             currentWeather[i].map((weather: ICurrentWeather, j: number) => {
                                                  return <CurrentWeatherCard key={j} location={favoritesLocation} isFavorite={isFavorite} currentWeather={weather} setFavorites={() => handleFavorite(favoritesLocation)} />;
                                             })}
                                   </div>
                              );
                         })}
                    </div>
               ) : (
                    'There is no favorites locations'
               )}
          </>
     );
};

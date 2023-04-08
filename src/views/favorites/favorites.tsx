import { useEffect, useState } from 'react';
import { CurrentWeatherCard } from '../../components/card/current-weather-card';
import { ICurrentWeather, ILocation } from '../HomePage/HomePage';
import useStyles from './useStyles';
import useWeatherAction from '../../actions/weather-action';
import React from 'react';

interface IFavorites {
     favorites: ILocation[];
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
     isFavorite: boolean;
}

export const Favorites = ({ favorites, setFavorites, isFavorite }: IFavorites) => {
     const classes = useStyles();
     const { getCurrentWeather } = useWeatherAction();
     const [currentWeather, setCurrentWeather] = useState<ICurrentWeather[]>([]);
     console.log('🚀 ~ file: favorites.tsx:20 ~ Favorites ~ currentWeather:', currentWeather);

     useEffect(() => {
          const fetchCurrentWeather = async () => {
               const weatherPromises = favorites.map((location: ILocation) => {
                    return getCurrentWeather(location.key);
               });
               const weatherData = await Promise.all(weatherPromises);
               setCurrentWeather(weatherData as any);
          };
          fetchCurrentWeather();
     }, [favorites, getCurrentWeather]);

     const handleFavorite = React.useCallback(
          (selectedLocation: ILocation) => {
               if (isFavorite) {
                    setFavorites((prevFavorites: ILocation[]) => prevFavorites.filter(favLocation => favLocation.key !== selectedLocation.key));
               } else {
                    setFavorites((prevFavorites: ILocation[]) => [...prevFavorites, selectedLocation]);
               }
          },
          [isFavorite, setFavorites]
     );

     return (
          <>
               {favorites.length ? (
                    <div>
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

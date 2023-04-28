import { useEffect, useState } from 'react';
import { CurrentWeatherCard } from '../../components/currentWeatherCard/current-weather-card';
import useWeatherAction from '../../actions/useWeatherAction';
import React from 'react';
import { ICurrentWeather, ILocation } from '../../types/weatherForecast';

interface IFavorites {
     favorites: ILocation[];
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
}

export const Favorites = ({ favorites, setFavorites }: IFavorites) => {
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
               setFavorites((prevFavorites: ILocation[]) => prevFavorites.filter(favLocation => favLocation.Key !== selectedLocation.Key));
          },
          [setFavorites]
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
                                                  return <CurrentWeatherCard key={j} location={favoritesLocation} isFavorite={true} currentWeather={weather} setFavorites={() => handleFavorite(favoritesLocation)} />;
                                             })}
                                   </div>
                              );
                         })}
                    </div>
               ) : (
                    <div
                         style={{
                              fontFamily: 'cursive',
                         }}>
                         'There is no favorites locations'
                    </div>
               )}
          </>
     );
};

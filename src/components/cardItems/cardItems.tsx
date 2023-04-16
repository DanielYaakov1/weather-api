import * as React from 'react';
import useStyles from './useStyles';
import { IDailyForecast, ICurrentWeather, ILocation } from '../../types/weatherForecast';
import { CurrentWeatherCard } from '../currentWeatherCard/current-weather-card';
import DailyForecastCard from '../dailyForecastCard/daily-forecast-card';

interface ICardItems {
     forecast: IDailyForecast[];
     currentWeather: ICurrentWeather[];
     location: ILocation;
     favorites?: ILocation[];
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
}

export const CardItems = React.memo(({ forecast, currentWeather, location, favorites = [], setFavorites }: ICardItems) => {
     const classes = useStyles();

     const isFavorite = !!favorites.find(favorite => favorite.Key === location?.Key);

     return (
          <React.Fragment>
               <div
                    style={{
                         display: 'inline-block',
                         margin: 7,
                    }}>
                    <CurrentWeatherCard setFavorites={setFavorites} isFavorite={isFavorite} location={location} currentWeather={currentWeather[0]} />
               </div>
               <div className={classes.cardItems}>
                    {forecast &&
                         forecast.map((_dailyForecast: IDailyForecast) => {
                              return (
                                   <div key={_dailyForecast.EpochDate} className='card'>
                                        <DailyForecastCard date={_dailyForecast.Date} temperature={_dailyForecast.Temperature} isFavoriteIcon={false} iconDayNumber={_dailyForecast.iconDayNumber} iconNightNumber={_dailyForecast.iconNightNumber}/>
                                   </div>
                              );
                         })}
               </div>
          </React.Fragment>
     );
});

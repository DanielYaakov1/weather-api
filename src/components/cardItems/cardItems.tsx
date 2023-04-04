import * as React from 'react';
import BasicCard from '../card/card';
import useStyles from './useStyles';
import WeatherForecast, { DailyForecast, Forecast } from '../../types/weatherForecast';
import { CurrentWeatherCard } from '../card/current-weather-card';
import { ICurrentWeather, ILocation } from '../../views/HomePage/HomePage';

interface IDailyForecasts {
     DailyForecasts: DailyForecast[];
}

interface ICardItems {
     forecast: IDailyForecasts[];
     currentWeather: ICurrentWeather[];
     location: ILocation[];
     favorites?: ILocation[];
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
}

export const CardItems = React.memo(({ forecast, currentWeather, location, favorites = [], setFavorites }: ICardItems) => {
     const classes = useStyles();

     const isFavorite = !!favorites.find(favorite => favorite.key === location[0]?.key);

     return (
          <React.Fragment>
               <div
                    style={{
                         width: '250px',
                         display: 'inline-block',
                         margin: 7,
                    }}>
                    <CurrentWeatherCard setFavorites={setFavorites} isFavorite={isFavorite} location={location} currentWeather={currentWeather} />
               </div>
               <div className={classes.cardItems}>
                    {forecast &&
                         forecast[0]?.DailyForecasts.map((_dailyForecast: DailyForecast) => {
                              return (
                                   <div key={_dailyForecast.EpochDate} className='card'>
                                        <BasicCard date={_dailyForecast.Date} temperature={_dailyForecast.Temperature} isFavoriteIcon={false} />
                                   </div>
                              );
                         })}
               </div>
          </React.Fragment>
     );
});

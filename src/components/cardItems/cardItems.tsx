import * as React from 'react';
import BasicCard from '../card/card';
import useStyles from './useStyles';
import { IDailyForecast, ICurrentWeather, ILocation } from '../../types/weatherForecast';
import { CurrentWeatherCard } from '../card/current-weather-card';

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
                         width: '250px',
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
                                        <BasicCard date={_dailyForecast.Date} temperature={_dailyForecast.Temperature} isFavoriteIcon={false} />
                                   </div>
                              );
                         })}
               </div>
          </React.Fragment>
     );
});

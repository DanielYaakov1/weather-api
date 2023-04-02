import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicCard from '../card/card';
import useStyles from './useStyles';
import WeatherForecast, { DailyForecast, Forecast } from '../../types/weatherForecast';
import CurrentWeatherCard from '../card/current-weather-card';
import { DailyForecast1, ICurrentWeather, ILocation } from '../../views/HomePage/HomePage';

interface IDailyForecasts {
     Headline: any;
     DailyForecasts: DailyForecast[];
}

interface ICardItems {
     forecast: IDailyForecasts[];
     currentWeather: ICurrentWeather[] | undefined;
     location: ILocation[];
}

const CardItems = React.memo(({ forecast, currentWeather, location }: ICardItems) => {
     const classes = useStyles();

     return (
          <React.Fragment>
               <div
                    style={{
                         width: '250px',
                         display: 'inline-block',
                         margin: 7,
                    }}>
                    <CurrentWeatherCard location={location} currentWeather={currentWeather}></CurrentWeatherCard>
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
export default CardItems;

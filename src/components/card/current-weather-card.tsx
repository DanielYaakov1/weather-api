import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { ICurrentWeather } from '../../views/HomePage/HomePage';

interface ICard {
     date: Date;
     temperature: {
          Maximum: {
               Unit: string;
               Value: number;
          };
     };
     isFavoriteIcon: boolean;
}
interface ICurrentWeather1 {
     WeatherText: string;
     Temperature: {
          Metric: {
               Value: number;
          };
     };
}

interface WeatherCardProps {
     currentWeather: any;
     location: any;
}

export default function CurrentWeatherCard({ currentWeather, location }: WeatherCardProps) {
     //console.log('🚀 ~ file: current-weather-card.tsx:28 ~ CurrentWeatherCard ~ currentWeather:', currentWeather?.WeatherText);
     // console.log(
     //      '🚀 ~ file: current-weather-card.tsx:28 ~ CurrentWeatherCard ~ currentWeather:',
     //      currentWeather.map((data: ICurrentWeather) => {
     //           return data.WeatherText;
     //      })
     // );
     console.log('typo of curr', currentWeather);
     console.log('curr index 0', currentWeather[0]);

     return (
          <Card sx={{ minWidth: 275, margin: '7px 7px' }}>
               <CardContent>
                    <Typography variant='h5' component='div'></Typography>
                    <Typography variant='h4' sx={{ mt: 2, mx: '2px' }} color='text.primary'>
                         {/* {currentWeather.map((weather: ICurrentWeather) => {
                              return (
                                   <div>
                                        <div>{weather?.WeatherText}</div>
                                        <div>{weather?.Temperature?.Metric.Value}</div>°C
                                   </div>
                              );
                         })} */}

                         <div>{location[0]?.name}</div>
                         <div>{currentWeather[0]?.Temperature?.Metric.Value} °C</div>
                    </Typography>
               </CardContent>
               <CardActions>
                    <IconButton aria-label='add to favorites'>
                         <FavoriteIcon />
                    </IconButton>
               </CardActions>
          </Card>
     );
}

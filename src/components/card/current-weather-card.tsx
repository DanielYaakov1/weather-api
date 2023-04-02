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

interface ICurrtWeather {
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
     console.log('🚀 ~ file: current-weather-card.tsx:27 ~ CurrentWeatherCard ~ location:', location);
     const [isFavorite, setIsFavorite] = React.useState(false);

     const handleFavorite = React.useCallback(() => {
          if (isFavorite) {
               debugger;
               console.log(location[0]?.key);
               localStorage.setItem('locationKey', location[0]?.key);
               setIsFavorite(true);
          }
          localStorage.removeItem('locationKey');
          setIsFavorite(false);
     }, [isFavorite, location]);

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
                    <IconButton onClick={() => handleFavorite} aria-label='add to favorites'>
                         <FavoriteIcon />
                    </IconButton>
               </CardActions>
          </Card>
     );
}

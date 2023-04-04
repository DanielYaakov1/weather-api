import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { ICurrentWeather, ILocation } from '../../views/HomePage/HomePage';
interface WeatherCardProps {
     currentWeather: ICurrentWeather[];
     location: ILocation[];
     isFavorite: boolean;
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
}

export const CurrentWeatherCard = ({ currentWeather, location, isFavorite, setFavorites }: WeatherCardProps) => {
     const handleFavorite = React.useCallback(() => {
          const selectedLocation = location[0];
          if (isFavorite) {
               setFavorites((prevFavorites: ILocation[]) => prevFavorites.filter(favLocation => favLocation.key !== selectedLocation.key));
          } else {
               setFavorites((prevFavorites: ILocation[]) => [...prevFavorites, selectedLocation]);
          }

          debugger;
     }, [isFavorite, location, setFavorites]);

     return (
          <Card sx={{ minWidth: 275, margin: '7px 7px' }}>
               <CardContent>
                    <Typography variant='h5' component='div'></Typography>
                    <Typography variant='h4' sx={{ mt: 2, mx: '2px' }} color='text.primary'>
                         <div>{location[0]?.name}</div>
                         <div>{currentWeather[0]?.Temperature?.Metric.Value} °C</div>
                    </Typography>
               </CardContent>
               <CardActions>
                    {location && (
                         <IconButton onClick={handleFavorite} aria-label='add to favorites'>
                              <FavoriteIcon />
                         </IconButton>
                    )}
               </CardActions>
          </Card>
     );
};

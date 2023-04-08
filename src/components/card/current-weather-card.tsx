import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { ICurrentWeather, ILocation } from '../../views/HomePage/HomePage';
import useStyles from './useStyles';

interface WeatherCardProps {
     currentWeather: ICurrentWeather;
     location: ILocation;
     isFavorite: boolean;
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
}

export const CurrentWeatherCard = ({ currentWeather, location, isFavorite, setFavorites }: WeatherCardProps) => {
     const classes = useStyles();

     const handleFavorite = React.useCallback(() => {
          const selectedLocation = location;
          if (isFavorite) {
               setFavorites((prevFavorites: ILocation[]) => prevFavorites.filter(favLocation => favLocation.key !== selectedLocation.key));
          } else {
               setFavorites((prevFavorites: ILocation[]) => [...prevFavorites, selectedLocation]);
          }
     }, [isFavorite, location, setFavorites]);

     return (
          <>
               <div className={classes.card}>
                    <div className={classes.title}>
                         <div>{location?.name}</div>
                    </div>
                    <div className={classes.temperature}>
                         <div>{currentWeather && currentWeather?.Temperature?.Metric.Value} °C</div>
                    </div>
                    {location && (
                         <IconButton onClick={handleFavorite} aria-label='add to favorites' style={{ color: isFavorite ? 'red' : '' }}>
                              <FavoriteIcon />
                         </IconButton>
                    )}
               </div>
          </>
     );
};

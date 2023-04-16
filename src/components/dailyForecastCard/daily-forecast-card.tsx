import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import WeatherIcon from "../weatherIcon/weatherIcon";

interface IDailyForecastCard {
     date: Date;
     temperature: {
          Maximum: {
               Unit: string;
               Value: number;
          };
     };
     isFavoriteIcon: boolean;
     iconDayNumber:number,
     iconNightNumber:number
}

export default function DailyForecastCard({ temperature, date, isFavoriteIcon,iconNightNumber,iconDayNumber }: IDailyForecastCard) {
     const formatDate = (isoString: Date | string | number) => {
          const date = new Date(isoString);
          const options: any = {
               weekday: 'short',
               day: 'numeric',
          };
          return date.toLocaleString('en-US', options);
     };
     return (
          <Card sx={{ minWidth: 272, margin: '7px' ,outline:'thick double #32a1ce' }}>
               <CardContent>
                    <Typography variant='h5' component='div' sx={{fontFamily:'cursive'}}>
                         {formatDate(date)}
                    </Typography>
                    <Typography variant='h6' sx={{ mt: 2, mx: '2px',fontFamily:'cursive' }} color='text.primary'>
                         <div>{temperature?.Maximum?.Value} °C</div>
                    </Typography>
                    <Typography variant='subtitle1' sx={{ mt: 2, mx: '2px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'cursive' }}  color='text.primary'>
                         Day:<WeatherIcon iconNumber={iconDayNumber}/>
                         Night:<WeatherIcon iconNumber={iconNightNumber}/>
                    </Typography>
               </CardContent>
                    {isFavoriteIcon && (
                         <IconButton aria-label='add to favorites'>
                              <FavoriteIcon />
                         </IconButton>
                    )}

          </Card>
     );
}

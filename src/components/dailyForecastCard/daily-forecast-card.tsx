import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface IDailyForecastCard {
     date: Date;
     temperature: {
          Maximum: {
               Unit: string;
               Value: number;
          };
     };
     isFavoriteIcon: boolean;
}

export default function DailyForecastCard({ temperature, date, isFavoriteIcon }: IDailyForecastCard) {
     const formatDate = (isoString: Date | string | number) => {
          const date = new Date(isoString);
          const options: any = {
               weekday: 'short',
               day: 'numeric',
          };
          return date.toLocaleString('en-US', options);
     };
     return (
          <Card sx={{ minWidth: 275, margin: '5px' }}>
               <CardContent>
                    <Typography variant='h5' component='div'>
                         {formatDate(date)}
                    </Typography>
                    <Typography variant='h6' sx={{ mt: 2, mx: '2px' }} color='text.primary'>
                         <div>{temperature?.Maximum?.Value} °C</div>
                    </Typography>
               </CardContent>
               <CardActions>
                    {isFavoriteIcon && (
                         <IconButton aria-label='add to favorites'>
                              <FavoriteIcon />
                         </IconButton>
                    )}
               </CardActions>
          </Card>
     );
}

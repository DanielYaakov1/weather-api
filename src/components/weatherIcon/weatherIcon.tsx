import React from 'react';

interface IWeatherIcon {
     iconNumber: number ;
}

const WeatherIcon = ({ iconNumber }: IWeatherIcon) => {
     const getIconUrl = (iconNumber: number ) => {
          return `https://developer.accuweather.com/sites/default/files/${iconNumber < 10 ? '0' + iconNumber : iconNumber}-s.png`;
     };

     return <img src={getIconUrl(iconNumber)} alt='Weather icon' />

};

export default WeatherIcon;

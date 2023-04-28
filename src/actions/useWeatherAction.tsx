import { useHttp } from '../hooks/useHttp';
import { useCallback } from 'react';
import { ICurrentWeather, ILocation, IDailyForecast } from '../types/weatherForecast';

const API_KEY = 'tPl3QGT9w9mLN2AF7bKcSc785t18btvO'; // jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3 // cwlzjnKODPSt5tGLh63JEXDKL03vtfMB //keIkcwQuwHMsCqZJawOVskNUec3ErVQq
const BASE_URL = 'https://dataservice.accuweather.com';
const API_VERSION = 'v1';

const useWeatherAction = () => {
     const { httpRequest } = useHttp();

     const getCurrentWeather = useCallback(
          async (locationKeys: string): Promise<ICurrentWeather[]> => {
               const res = await httpRequest(`${BASE_URL}/currentconditions/${API_VERSION}/${locationKeys}?apikey=${API_KEY}`);
               const currentWeather = res.map((weather: ICurrentWeather) => {
                    return {
                         WeatherText: weather.WeatherText,
                         WeatherIcon: weather.WeatherIcon,
                         Temperature: {
                              Metric: {
                                   Value: weather.Temperature.Metric?.Value,
                              },
                         },
                    };
               });
               return currentWeather;
          },
          [httpRequest]
     );

     const searchLocationByName = useCallback(
          async (name: string): Promise<ILocation[]> => {
               const res = await httpRequest(`${BASE_URL}/locations/${API_VERSION}/cities/autocomplete?apikey=${API_KEY}&q=${encodeURIComponent(name)}`);
               return res.map((location: ILocation) => ({
                    Key: location.Key,
                    name: location.LocalizedName,
                    country: location.Country,
                    region: location.region,
               }));
          },
          [httpRequest]
     );

     const getDailyForecast = useCallback(
          async (locationKey: string): Promise<IDailyForecast[]> => {
               const res = await httpRequest(
                    `${BASE_URL}/forecasts/${API_VERSION}/daily/5day/${locationKey}`,
                    'GET',
                    null,
                    {},
                    {
                         apikey: API_KEY,
                         metric: true,
                    }
               );
               return res.DailyForecasts.map((forecast: IDailyForecast) => ({
                    Date: forecast.Date,
                    minTemp: forecast.Temperature.Minimum.Value,
                    maxTemp: forecast.Temperature.Maximum.Value,
                    UnitType: forecast.Temperature.Maximum.UnitType,
                    Temperature: forecast.Temperature,
                    EpochDate: forecast.EpochDate,
                    iconDayNumber: forecast.Day?.Icon,
                    iconNightNumber: forecast.Night?.Icon,
               }));
          },
          [httpRequest]
     );

     return { getDailyForecast, searchLocationByName, getCurrentWeather };
};
export default useWeatherAction;

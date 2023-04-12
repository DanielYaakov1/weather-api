import { useHttp } from '../hooks/useHttp';
import { useCallback } from 'react';
import { ICurrentWeather, ILocation } from '../types/weatherForecast';

const API_KEY = 'tPl3QGT9w9mLN2AF7bKcSc785t18btvO';
const BASE_URL = 'http://dataservice.accuweather.com';

export interface DailyForecast {
     date: string;
     minTemp: number;
     maxTemp: number;
     weatherText: string;
}

const useWeatherAction = () => {
     const { httpRequest } = useHttp();

     const getCurrentWeather = useCallback(
          async (locationKeys: string): Promise<ICurrentWeather[]> => {
               const res = await httpRequest(`${BASE_URL}/currentconditions/v1/${locationKeys}?apikey=${API_KEY}`);
               const currentWeather = res.map((weather: ICurrentWeather) => {
                    return {
                         WeatherText: weather.WeatherText,
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
               const res = await httpRequest(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${encodeURIComponent(name)}`);
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
          async (locationKey: string): Promise<DailyForecast[]> => {
               //debugger;
               const res = await httpRequest(
                    `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}`,
                    'GET',
                    null,
                    {},
                    {
                         apikey: API_KEY,
                         metric: true,
                    }
               );
               // return res.data.DailyForecasts?.map((forecast: any) => ({
               //      date: forecast.Date,
               //      minTemp: forecast.Temperature.Minimum.Value,
               //      maxTemp: forecast.Temperature.Maximum.Value,
               //      weatherText: forecast.Day.IconPhrase,
               // }))
               return res;
          },
          [httpRequest]
     );

     return { getDailyForecast, searchLocationByName, getCurrentWeather };
};
export default useWeatherAction;

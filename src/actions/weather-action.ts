import { ILocation } from './../views/HomePage/HomePage';
import useHttp from '../hooks/useHttp';

const SEARCH_BY_CITY_NAME_URL = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
const CURRENT_WEATHER_URL = 'http://dataservice.accuweather.com/currentconditions/v1';
const FIVE_DAYS_DAILY_FORECAST_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day';
const apiKey = 'tPl3QGT9w9mLN2AF7bKcSc785t18btvO';

const API_KEY = 'tPl3QGT9w9mLN2AF7bKcSc785t18btvO';
const BASE_URL = 'http://dataservice.accuweather.com';

export interface Location {
     Key: string;
     name: string;
     country: string;
     region?: string;
     LocalizedName?: string;
}

export interface CurrentWeather {
     temperature: number;
     weatherText: string;
}

export interface DailyForecast {
     date: string;
     minTemp: number;
     maxTemp: number;
     weatherText: string;
}

const WeatherAction = () => {
     const { httpRequest } = useHttp();

     const getCurrentWeather = async (locationKeys: string): Promise<CurrentWeather> => {
          const res = await httpRequest(`${BASE_URL}/currentconditions/v1/${locationKeys}?apikey=${API_KEY}`);
          const currentWeather = res.map((weather: any) => {
               return {
                    WeatherText: weather.WeatherText,
                    Temperature: {
                         Metric: {
                              Value: weather.Temperature.Metric.Value,
                         },
                    },
               };
          });
          return currentWeather;
     };

     const searchLocationByName = async (name: string): Promise<ILocation[]> => {
          //     'GET',
          //          null,
          //          {},
          //          {
          //               params: {
          //                    apikey: API_KEY,
          //                    q: name,
          //               },
          //          };
          const res = await httpRequest(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${name}`);
          const data = res;
          //return res;
          return res.map((location: any) => ({
               key: location.Key,
               name: location.LocalizedName,
               //country: location.Country.LocalizedName,
               // region: location?.Region?.LocalizedName,
          }));
     };

     const getDailyForecast = async (locationKey: string): Promise<DailyForecast[]> => {
          const res = await httpRequest(
               `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}`,
               'GET',
               null,
               {},
               {
                    params: {
                         apikey: API_KEY,
                         metric: true,
                    },
               }
          );
          return res.data.DailyForecasts.map((forecast: any) => ({
               date: forecast.Date,
               minTemp: forecast.Temperature.Minimum.Value,
               maxTemp: forecast.Temperature.Maximum.Value,
               weatherText: forecast.Day.IconPhrase,
          }));
     };

     interface WeatherCity {
          key: string;
     }

     const weatherForecast5DaysByCityName = async (name: string): Promise<any> => {
          try {
               const weatherByCityName = await searchLocationByName(name);
               const fiveDaysForecast = await getDailyForecast(weatherByCityName as any);
               return fiveDaysForecast;
          } catch (error) {
               if (error instanceof Error) console.error(`Error fetching weather forecast: ${error.message}`);
               throw new Error('Failed to fetch weather forecast');
          }
     };

     return { getDailyForecast, searchLocationByName, getCurrentWeather, weatherForecast5DaysByCityName };
};
export default WeatherAction;

//      const get5DaysDailyForecastById = async (locationKeys: string[]) => {
//           // Convert locationKeys to an array if it's a string | string
//           //   if (typeof locationKeys === 'string') {
//           //        locationKeys = [locationKeys];
//           //   }
//           const idsWithApiKey = locationKeys.map(id => `${id}?apikey=${apiKey}&metric=true`);
//
//           const forecasts = await Promise.all(
//                idsWithApiKey.map(async id => {
//                     try {
//                          const res = await httpRequest(`${FIVE_DAYS_DAILY_FORECAST_URL}/${id}`);
//                          return res;
//                     } catch (e) {
//                          console.log(`Error fetching forecast for location ${id}: ${e}`);
//                          return null;
//                     }
//                })
//           );
//
//           return forecasts.filter(forecast => forecast !== null);
//      };

import { useCallback, useEffect, useState } from 'react';
import useStyles from './useStyles';
import useStorageService from '../../services/useStorageService';
import useWeatherAction from '../../actions/weather-action';
import { CURR_WEATHER_TEL_AVIV, FIVE_DAYS_MOCK } from '../../mock/data';
import Search from '../../components/search';
import { onlyEnglishLetters } from '../../utils/validation.helper';
import BasicCard from '../../components/card/card';
import CardItems from '../../components/cardItems';
import { DailyForecast, Headline } from '../../types/weatherForecast';
import SearchBar from './test2';

export interface ILocation {
     key: string;
     name: string;
     country?: string;
     region?: string;
     LocalizedName?: string;
}

export interface ICurrentWeather {
     Temperature: {
          Metric: {
               Value: number;
          };
     };
     WeatherText: string;
}

export interface DailyForecast1 {
     date: string;
     minTemp: number;
     maxTemp: number;
     weatherText: string;
}

interface IHomepage {
     favorites: ILocation[];
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
}

const HomePage = ({ favorites, setFavorites }: IHomepage) => {
     const classes = useStyles();
     const { weatherForecast5DaysByCityName, searchLocationByName, getCurrentWeather, getDailyForecast } = useWeatherAction();
     const storageService = useStorageService();
     const [forecast, setForecast] = useState([]);
     const [searchInput, setSearchInput] = useState('');
     const [isErrorSearch, setIsErrorSearch] = useState('');
     const fiveDays = JSON.stringify(FIVE_DAYS_MOCK);
     storageService.setItem('fiveDays', fiveDays);

     //------------------------------------------------------------------------------
     const [searchText, setSearchText] = useState('');
     const [locations, setLocations] = useState<ILocation[]>([]); //add selected location
     const [currentWeather, setCurrentWeather] = useState<ICurrentWeather[]>([]);
     const [dailyForecast, setDailyForecast] = useState<DailyForecast1[]>([]);
     const [isFavorite, setIsFavorite] = useState(false);
     //------------------------------------------------------------------------------

     // useEffect(() => {
     //default value for tel aviv location
     //      const fetchData = async () => {
     //           try {
     //                const res = await weatherForecast5DaysByCityName(cityTelAviv);
     //                const dataStr = JSON.stringify(res);
     //                storageService.setItem('resData', dataStr);
     //                setData(res);
     //           } catch (error) {
     //                console.error(error);
     //           }
     //      };
     //      fetchData();
     // }, []);

     useEffect(() => {
          const savedDataStr = storageService.getItem('testDaniel');
          const savedData = JSON.parse(savedDataStr as any);
          setForecast(savedData); // data - bad name
     }, []);

     const handleSearch = useCallback(
          async (e: React.ChangeEvent<HTMLInputElement>) => {
               const isSearchIncludeEnglishChars = onlyEnglishLetters(e.target.value);
               if (isSearchIncludeEnglishChars) {
                    setSearchInput(e.target.value);
                    setIsErrorSearch('');
                    if (searchInput.length >= 4) {
                         //debugger;
                         const weather5Days = await weatherForecast5DaysByCityName(e.target.value);
                         const dataStr = JSON.stringify(weather5Days);
                         storageService.setItem('weather5Days', dataStr);
                         setForecast(weather5Days);
                    }
               } else {
                    setIsErrorSearch('Search can be only English!');
               }
          },
          [searchInput.length, storageService, weatherForecast5DaysByCityName]
     );

     useEffect(() => {
          // check if location is already in favorites
          const locationKey = localStorage.getItem('locationKey');
          if (locationKey) {
               setIsFavorite(true);
               fetchCurrentWeatherAndForecast(locationKey);
          }
     }, []);

     const handleSearch1 = async (text: string) => {
          setSearchText(text);
          if (text.length >= 7) {
               const results = await searchLocationByName(text);
               // this is plural
               setLocations(results);
               const currentRes = await getCurrentWeather(results[0].key);
               setCurrentWeather(currentRes as any);
          }
     };
     const fetchCurrentWeatherAndForecast = async (locationKey: any) => {
          const [current, forecast] = await Promise.all([getCurrentWeather(locationKey), getDailyForecast(locationKey)]);
          setCurrentWeather(current as any);
          setDailyForecast(forecast);
          localStorage.setItem('locationKey', locationKey);
     };

     return (
          <div className={classes.root}>
               <SearchBar searchText={searchText} onSearch={handleSearch1} />
               {/* <div className={classes.search}>
                    <Search isErrorMessage={isErrorSearch} handleChangeValue={handleSearch} value={searchInput} placeholder={'Search'}></Search>
               </div> */}

               {/* this should receive a single location */}
               <CardItems setFavorites={setFavorites} favorites={favorites} location={locations} currentWeather={currentWeather} forecast={forecast} />
          </div>
     );
};

export default HomePage;

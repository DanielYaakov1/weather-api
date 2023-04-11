import { SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import useStyles from './useStyles';
import useStorageService from '../../services/useStorageService';
import useWeatherAction from '../../actions/weather-action';
import Search from '../../components/search';
import { onlyEnglishLetters } from '../../utils/validation.helper';
import CardItems from '../../components/cardItems';
import SearchBar from './SearchBar';
import { IDailyForecasts } from '../../components/cardItems/cardItems';
import debounce from 'lodash.debounce';

export interface ILocation {
     Key: string;
     name: string;
     Country?: string;
     region?: string;
     LocalizedName?: string;
}

export interface ICurrentWeather {
     [x: string]: any;
     Temperature: {
          Metric: {
               Value: number;
          };
     };
     WeatherText: string;
}

export interface DailyForecast {
     date: string;
     minTemp: number;
     maxTemp: number;
     weatherText: string;
}

interface IHomepage {
     favorites: ILocation[];
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
}

export const HomePage = ({ favorites, setFavorites }: IHomepage) => {
     const classes = useStyles();
     const { weatherForecast5DaysByCityName, searchLocationByName, getCurrentWeather, getDailyForecast } = useWeatherAction();
     const storageService = useStorageService();
     const [isErrorSearch, setIsErrorSearch] = useState('');
     //------------------------------------------------------------------------------
     const [searchText, setSearchText] = useState('');
     const [locations, setLocations] = useState<ILocation[]>([]); //add selected location
     const [currentWeather, setCurrentWeather] = useState<ICurrentWeather[]>([]);
     const [dailyForecast, setDailyForecast] = useState<IDailyForecasts[]>([]);

     //------------------------------------------------------------------------------

     useEffect(() => {
          const getForecastData = storageService.getItem('testDaniel');
          const parseToJsonForecastData = JSON.parse(getForecastData as any);
          setDailyForecast(parseToJsonForecastData);
     }, []);

     useEffect(() => {
          // check if location is already in favorites
          const fetchDefaultTelAvivLocation = async () => {
               const results = await searchLocationByName('Tel Aviv');
               // this is plural
               setLocations(results);
               console.log('this is the log from default value', results[0].Key);
               const currentRes = await getCurrentWeather(results[0].Key);
               setCurrentWeather(currentRes);
          };
          fetchDefaultTelAvivLocation();
     }, [getCurrentWeather, searchLocationByName]);

     useEffect(() => {
          return () => {
               debouncedChangeHandler.cancel();
          };
     }, []);

     const debouncedChangeHandler = useMemo(
          () =>
               debounce(async text => {
                    debugger;
                    const results = await searchLocationByName(text);
                    setLocations(results);
                    const currentRes = await getCurrentWeather(results[0].Key);
                    setCurrentWeather(currentRes as any);
               }, 3000),
          [getCurrentWeather, searchLocationByName]
     );

     const handleSearch = useCallback(
          async (text: string) => {
               debugger;
               const isSearchIncludeEnglishChars = onlyEnglishLetters(text);
               if (isSearchIncludeEnglishChars) {
                    setIsErrorSearch('');
                    setSearchText(text);
                    debouncedChangeHandler(text);
                    //setDailyForecast(weather5Days);
               } else {
                    setIsErrorSearch('Search can be only English!');
               }
          },
          [debouncedChangeHandler]
     );

     return (
          <div className={classes.root}>
               <div className={classes.search}>
                    <SearchBar searchText={searchText} onSearch={handleSearch} placeholder={'Search location'} isErrorMessage={isErrorSearch} />
                    {/* <Search isErrorMessage={'isErrorSearch'} handleChangeValue={() => console.log('sa')} value={searchText} placeholder={'Search'}></Search> */}
               </div>
               {/* this should receive a single location */}
               <CardItems setFavorites={setFavorites} favorites={favorites} location={locations} currentWeather={currentWeather} forecast={dailyForecast} />
          </div>
     );
};

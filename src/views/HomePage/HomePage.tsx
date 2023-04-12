import { useCallback, useEffect, useMemo, useState } from 'react';
import useStyles from './useStyles';
import { useStorageService } from '../../services/useStorageService';
import useWeatherAction from '../../actions/weather-action';
import Search from '../../components/search';
import { onlyEnglishLetters } from '../../utils/validation.helper';
import CardItems from '../../components/cardItems';
import { IDailyForecasts } from '../../components/cardItems/cardItems';
import debounce from 'lodash.debounce';
import { ICurrentWeather, ILocation } from '../../types/weatherForecast';

interface IHomepage {
     favorites: ILocation[];
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
}

export const HomePage = ({ favorites, setFavorites }: IHomepage) => {
     const classes = useStyles();
     const { searchLocationByName, getCurrentWeather, getDailyForecast } = useWeatherAction();
     const storageService = useStorageService();
     const [isErrorSearch, setIsErrorSearch] = useState('');
     const [searchText, setSearchText] = useState('');
     const [locations, setLocations] = useState<ILocation[]>([]);
     const [currentWeather, setCurrentWeather] = useState<ICurrentWeather[]>([]);
     const [dailyForecast, setDailyForecast] = useState<IDailyForecasts[]>([]);
     //------------------------------------------------------------------------------

     // useEffect(() => {
     //      const getForecastData = storageService.getItem('testDaniel');
     //      const parseToJsonForecastData = JSON.parse(getForecastData as any);
     //      setDailyForecast(parseToJsonForecastData);
     // }, []);

     useEffect(() => {
          // check if location is already in favorites
          const fetchDefaultTelAvivLocation = async () => {
               const results = await searchLocationByName('Tel Aviv');
               // this is plural
               setLocations(results);
               //const currentRes = await getCurrentWeather(results[0].Key);
               //setCurrentWeather(currentRes);
               const dailyForecast = await getDailyForecast(results[0].Key);
               setDailyForecast(dailyForecast as any);
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
                    setCurrentWeather(currentRes);
                    const dailyForecast = await getDailyForecast(results[0].Key);
                    setDailyForecast(dailyForecast as any);
               }, 3000),
          [getCurrentWeather, searchLocationByName]
     );

     const handleSearch = useCallback(
          async (text: string) => {
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
                    <Search searchText={searchText} onSearch={handleSearch} placeholder={'Search location'} isErrorMessage={isErrorSearch} />
               </div>
               <CardItems setFavorites={setFavorites} favorites={favorites} location={locations[0]} currentWeather={currentWeather} forecast={dailyForecast} />
          </div>
     );
};

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useStyles from './useStyles';
import useWeatherAction from '../../actions/useWeatherAction';
import Search from '../../components/search';
import { onlyEnglishLetters } from '../../utils/validation.helper';
import CardItems from '../../components/cardItems';
import debounce from 'lodash.debounce';
import { IDailyForecast, ICurrentWeather, ILocation } from '../../types/weatherForecast';

interface IHomepage {
     favorites: ILocation[];
     setFavorites: React.Dispatch<React.SetStateAction<ILocation[]>>;
}

export const HomePage = ({ favorites, setFavorites }: IHomepage) => {
     const classes = useStyles();
     const { searchLocationByName, getCurrentWeather, getDailyForecast } = useWeatherAction();
     const [isErrorSearch, setIsErrorSearch] = useState('');
     const [searchText, setSearchText] = useState('');
     const [locations, setLocations] = useState<ILocation[]>([]);
     const [currentWeather, setCurrentWeather] = useState<ICurrentWeather[]>([]);
     const [dailyForecast, setDailyForecast] = useState<IDailyForecast[]>([]);
     const [isLoading, setIsLoading] = useState(false);

     useEffect(() => {
          let isMounted = true;

          const fetchDefaultTelAvivLocation = async () => {
               const results = await searchLocationByName('Tel Aviv');
               if (!isMounted) return;
               setLocations(results);
               const currentRes = await getCurrentWeather(results[0].Key);
               if (!isMounted) return;
               setCurrentWeather(currentRes);
               const dailyForecast = await getDailyForecast(results[0].Key);
               if (!isMounted) return;
               setDailyForecast(dailyForecast);
          };

          fetchDefaultTelAvivLocation();

          return () => {
               isMounted = false;
          };
     }, [searchLocationByName, getCurrentWeather, getDailyForecast]);

     const debouncedChangeHandler = useMemo(
          () =>
               debounce(async (text: string) => {
                    const locationsResult = await searchLocationByName(text);
                    setLocations(locationsResult);
                    setIsLoading(false);
               }, 300),
          [searchLocationByName]
     );

     useEffect(() => {
          return () => {
               debouncedChangeHandler.cancel();
          };
     }, [debouncedChangeHandler]);

     const handleSearch = useCallback(
          async (text: string) => {
               const isSearchIncludeEnglishChars = onlyEnglishLetters(text);
               if (isSearchIncludeEnglishChars) {
                    setIsErrorSearch('');
                    setSearchText(text);
                    setIsLoading(true);
                    debouncedChangeHandler(text);
               } else {
                    setIsErrorSearch('Search can be only English!');
               }
          },
          [debouncedChangeHandler]
     );

     const handleSelectLocation = async (selectedLocation: ILocation) => {
          setSearchText(selectedLocation.name);
          setIsErrorSearch('');
          setLocations([selectedLocation]);
          // setLocations([]);
          // setSelectedLocation(selectedLocation);
          const currentRes = await getCurrentWeather(selectedLocation.Key);
          setCurrentWeather(currentRes);
          const dailyForecast = await getDailyForecast(selectedLocation.Key);
          setDailyForecast(dailyForecast);
     };
     return (
          <div className={classes.root}>
               <div className={classes.search}>
                    <Search searchText={searchText} onSearch={handleSearch} onLocationSelect={handleSelectLocation} placeholder={'Search location'} isErrorMessage={isErrorSearch} locations={locations} />
               </div>
               {isLoading ? <div className={classes.loading}>Loading...</div> : <CardItems setFavorites={setFavorites} favorites={favorites} location={locations[0]} currentWeather={currentWeather} forecast={dailyForecast} />}
          </div>
     );
};

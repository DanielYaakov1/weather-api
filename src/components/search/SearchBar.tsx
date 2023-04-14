import React, { memo, useState } from 'react';
import useStyles from './useStyles';
import { ILocation } from '../../types/weatherForecast';

interface SearchBarProps {
     searchText: string;
     onSearch: (text: string) => void;
     placeholder: string;
     isErrorMessage: string;
     locations: ILocation[];
}

const SearchBar = memo(({ searchText, onSearch, placeholder, isErrorMessage, locations }: SearchBarProps) => {
     const classes = useStyles();
     const [isShow, setIsShow] = useState(false);
     const [newFilteredLocations, setNewFilteredLocations] = useState<ILocation[]>([]);
     const [active, setActive] = useState(0);

     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          onSearch(event.target.value);
          const newFilteredSuggestions = locations.filter((location: ILocation) => location.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
          setActive(0);
          setNewFilteredLocations(newFilteredSuggestions);
          setIsShow(true);
     };

     const onClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, locationKey: string) => {
          setActive(0);
          setNewFilteredLocations([]);
          setIsShow(false);
          onSearch(event.currentTarget.innerText);
          //onSearch(locationKey);
          //console.log('location key', locationKey);
     };

     return (
          <div className={classes.autocompleteWrapper}>
               <input className={classes.input} type='text' placeholder={placeholder} value={searchText} onChange={handleInputChange} />
               {isShow && searchText && (
                    <ul className={classes.autocomplete}>
                         {newFilteredLocations.length ? (
                              newFilteredLocations.map((location: ILocation, index) => (
                                   <li key={location.Key} className={`${classes.autocompleteItem} ${index === active ? classes.autocompleteActiveItem : ''}`} onClick={e => onClick(e, location.Key)}>
                                        {location.name}
                                   </li>
                              ))
                         ) : (
                              <div className={classes.noAutocomplete}>
                                   <em>Not found</em>
                              </div>
                         )}
                    </ul>
               )}
               <p style={{ color: 'red' }}>{isErrorMessage}</p>
          </div>
     );
});

export default SearchBar;

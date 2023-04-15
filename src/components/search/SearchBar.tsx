import React, { memo, useState } from 'react';
import useStyles from './useStyles';
import { ILocation } from '../../types/weatherForecast';

interface SearchBarProps {
     searchText: string;
     onSearch: (text: string) => void;
     placeholder: string;
     isErrorMessage: string;
     locations: ILocation[];
     onLocationSelect: (location: ILocation) => void;
}

const SearchBar = memo(({ searchText, onSearch, placeholder, isErrorMessage, locations, onLocationSelect }: SearchBarProps) => {
     const classes = useStyles();
     const [isShow, setIsShow] = useState(false);
     const [newFilteredLocations, setNewFilteredLocations] = useState<ILocation[]>([]);
     const [active, setActive] = useState(0);

     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const newFilteredSuggestions = locations.filter((location: ILocation) => location.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
          onSearch(event.target.value);
          setActive(0);
          setNewFilteredLocations(newFilteredSuggestions);
          setIsShow(true);
     };

     const handleSelectLocation = (location: ILocation) => {
          setIsShow(false);
          setNewFilteredLocations([]);
          onLocationSelect(location); // calling onLocationSelect with the selected location
     };

     const onClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, locationKey: string) => {
          const selectedLocation: ILocation | undefined = locations.find(location => location.Key === locationKey);
          selectedLocation ? handleSelectLocation(selectedLocation) : console.error('selectedLocation is undefined');
          setIsShow(false);
          setActive(0);
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

import React, { useState } from 'react';
import { ILocation } from './HomePage';

interface SearchBarProps {
     searchText: string;
     onSearch: (text: string) => void;
}

const SearchBar = ({ searchText, onSearch }: SearchBarProps) => {
     const [isFocused, setIsFocused] = useState(false);

     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          onSearch(event.target.value);
     };

     return (
          <div className='search-bar'>
               <input type='text' placeholder='Search location' value={searchText} onChange={handleInputChange} />
          </div>
     );
};

export default SearchBar;

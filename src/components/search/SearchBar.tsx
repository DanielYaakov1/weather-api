import React, { memo, useState } from 'react';
import useStyles from './useStyles';

interface SearchBarProps {
     searchText: string;
     onSearch: (text: string) => void;
     placeholder: string;
     isErrorMessage: string;
}

const SearchBar = memo(({ searchText, onSearch, placeholder, isErrorMessage }: SearchBarProps) => {
     const classes = useStyles();

     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          onSearch(event.target.value);
     };

     return (
          <div>
               <input className={classes.root} type='text' placeholder={placeholder} value={searchText} onChange={handleInputChange} />
               <p style={{ color: 'red' }}>{isErrorMessage}</p>
          </div>
     );
});

export default SearchBar;

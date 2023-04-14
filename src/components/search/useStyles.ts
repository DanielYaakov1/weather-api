import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
     input: {
          border: '1px solid #999',
          padding: '8px',
          width: '300px',
     },
     noAutocomplete: {
          color: '#999',
          padding: '8px',
     },
     autocompleteWrapper: {
          position: 'relative',
          width: '300px',
     },
     autocomplete: {
          border: '1px solid #999',
          borderTopWidth: 0,
          listStyle: 'none',
          marginTop: 0,
          maxHeight: '200px',
          overflowY: 'auto',
          paddingLeft: '0',
          width: 'calc(300px + 1rem)',
          backgroundColor: 'white',
          position: 'absolute',
          zIndex: 1,
          top: '100%',
          left: 0,
     },
     autocompleteItem: {
          padding: '8px',
          cursor: 'pointer',
          fontWeight: 400,
          '&:hover': {
               backgroundColor: 'darkgray',
               fontWeight: 700,
          },
          '&:not(:last-of-type)': {
               borderBottom: '1px solid #999',
          },
     },
     autocompleteActiveItem: {
          backgroundColor: 'darkgray',
          cursor: 'pointer',
          fontWeight: 700,
     },
});

export default useStyles;

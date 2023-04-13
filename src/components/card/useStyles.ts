import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
     root: {},
     card: {
          minWidth: '275px',
          minHeight: '128px',
          backgroundColor: '#fff',
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignContent: 'space-around',
          justifyContent: 'space-evenly',
          margin: '10px 10px',
     },
     title: {},
     temperature: {},
});

export default useStyles;

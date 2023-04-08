import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
     root: {},
     card: {
          width: 275,
          minHeight: 100,
          backgroundColor: 'rgb(63 81 181 / 19%)',
          borderRadius: 10,
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

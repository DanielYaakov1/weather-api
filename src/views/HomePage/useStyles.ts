import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
     root: {},
     search: {
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
     },
     dataContainer: {
          display: 'grid',
     },
     loading:{
          position: 'absolute',
          top: "50%",
          left: '50%',

     }

});

export default useStyles;

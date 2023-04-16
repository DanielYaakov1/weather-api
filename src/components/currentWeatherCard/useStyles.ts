import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
     root: {},
     card: {
         minWidth: '275px',
         minHeight: '150px',
         backgroundColor: '#fff',
         borderRadius: 4,
         display: 'flex',
         outline: 'thick double #32a1ce',
         flexDirection: 'column',
         flexWrap: 'wrap',
         justifyContent: 'space-between',
         margin: '10px 10px',
     },
     title: {
         fontFamily:'cursive',
         fontWeight: '500',
         fontSize: '1.25rem',
         lineHeight: '1.6',
     },
     temperature: {
         fontFamily:'cursive',
         fontWeight: 400,
         fontSize: '1rem',
         lineHeight: '1.334',
     },
     details: {
          display: 'flex',
         flexDirection: 'column',
         justifyContent: 'space-between',
         padding: '0 50px',
         flexGrow: 1
   },
     icon:{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'

     }

});

export default useStyles;

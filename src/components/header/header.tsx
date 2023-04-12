import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
     activeIcon: {
          '& .MuiIconButton-root': {
               color: 'white',
          },
     },

     header: {
          width: '100%',
          minHeight: '50px',
          backgroundColor: '#61D4D2',
          paddingLeft: '10px',
          display: 'flex',
          '&.a': {
               all: 'unset',
          },
          '& .MuiIconButton-root': {
               padding: 0,
               margin: 0,
          },
     },
     navLink: { display: 'inline-block', alignItems: 'center', flexWrap: 'nowrap', margin: '10px' },
}));

export const Header = () => {
     const classes = useStyles();

     return (
          <>
               <div className={classes.header}>
                    <div className={classes.navLink}>
                         <NavLink to='/' className={({ isActive }) => (isActive ? classes.activeIcon : '')}>
                              <IconButton>
                                   <HomeIcon />
                              </IconButton>
                         </NavLink>
                    </div>
                    <div className={classes.navLink}>
                         <NavLink to='/favorites' className={({ isActive }) => (isActive ? classes.activeIcon : '')}>
                              <IconButton>
                                   <FavoriteIcon />
                              </IconButton>
                         </NavLink>
                    </div>
               </div>
          </>
     );
};

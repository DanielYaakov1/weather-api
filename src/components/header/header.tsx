import React from 'react';
import { NavLink, Link, useMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
     appBar: {
          backgroundColor: '#fff',
          color: '#000',
          display: 'flex',
          flexDirection: 'row',
     },
     title: {
          flexGrow: 1,
     },
     iconButton: {
          marginLeft: theme.spacing(1),
          color: '#000',
     },
     activeIcon: {
          '& .MuiIconButton-root': {
               color: 'green',
               animation: '$bounce 0.5s linear',
          },
     },
     '@keyframes bounce': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
     },
}));

const Header = () => {
     const classes = useStyles();

     return (
          <AppBar position='static' className={classes.appBar}>
               <Toolbar>
                    <NavLink to='/' className={({ isActive }) => (isActive ? classes.activeIcon : classes.title)}>
                         <IconButton>
                              <HomeIcon />
                         </IconButton>
                    </NavLink>
                    <NavLink to='/favorites' className={({ isActive }) => (isActive ? classes.activeIcon : classes.iconButton)}>
                         <IconButton>
                              <FavoriteIcon />
                         </IconButton>
                    </NavLink>
               </Toolbar>
          </AppBar>
     );
};

export default Header;

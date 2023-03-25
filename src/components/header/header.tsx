import React from 'react';
import { Link } from 'react-router-dom';
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
     },
     title: {
          flexGrow: 1,
     },
     iconButton: {
          marginLeft: theme.spacing(1),
     },
}));

const Header = () => {
     const classes = useStyles();

     return (
          <AppBar position='static' className={classes.appBar}>
               <Toolbar>
                    <Link to='/' className={classes.title}>
                         <IconButton>
                              <HomeIcon />
                         </IconButton>
                    </Link>
                    <Link to='/favorites' className={classes.iconButton}>
                         <IconButton>
                              <FavoriteIcon />
                         </IconButton>
                    </Link>
               </Toolbar>
          </AppBar>
     );
};

export default Header;

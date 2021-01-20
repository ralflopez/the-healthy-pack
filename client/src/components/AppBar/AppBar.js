import { Box,Link, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function AppBar() {
    const classes = useStyles();
    const { pathname } = useLocation();
    let history = useHistory();

    const changeRoute = (route) => {
        if(pathname === route)
            return
        history.push(route);
    }

    return (
        <Box p={2} className={classes.root}>
            <Link 
                color="inherit" 
                component="button"
                onClick={() => changeRoute('/')}
                className={`${classes.navLink} ${pathname === '/' && classes.active}`}
            >Home</Link>
            <Link 
                color="inherit" 
                component="button"
                onClick={() => changeRoute('/products')}
                className={`${classes.navLink} ${pathname === '/products' && classes.active}`}
                >Products</Link>
            <Link 
                color="inherit" 
                component="button"
                onClick={() => changeRoute('/cart')}
                className={`${classes.navLink} ${pathname === '/cart' && classes.active}`}
            >Cart</Link>
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        zIndex: 5,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: theme.palette.primary.main
    },
    navLink: {
        margin: theme.spacing(1),
        fontFamily: "'Ibarra Real Nova', serif",
        fontSize: theme.typography.h6.fontSize,
    },
    active: {
        fontWeight: 700
    }
}))

export default AppBar;
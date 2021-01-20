import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../../../assets/logo_475.svg';

function Footer() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Box className={classes.container} pt={5} pb={5}>
                <div className={`${classes.logoContainer} ${classes.mgb}`}>
                    <img src={logo} alt="logo.jpg" className={classes.logo}/>
                </div>
                <div className={classes.infoContainer}>
                    <Typography variant="h3" gutterBottom>About Us</Typography>
                    <Typography variant="body1" gutterBottom className={classes.mgb}>The healthy up is a start up that offers healthy packed foods ready to be delivered straight from your door step </Typography>
                    <Typography variant="h6">Contact:   09274056573</Typography>
                    <Typography variant="h6">Address:   The Healthy Pack Office, Bldg. 1, Makati City</Typography>
                </div>
            </Box>
        </section>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        minHeight: '50vh',
        backgroundColor: theme.palette.secondary.main,
    },
    container: {
        width: '90%',
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    logo: {
        width: '50%',
        height: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '200px',
            height: '200px'
        }
    },
    logoContainer: {
        flex: 2,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 5,
        color: theme.palette.secondary.contrastText
    },
    mgb: {
        marginBottom: theme.spacing(4)
    }
}));

export default Footer;
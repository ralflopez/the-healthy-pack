import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function ProductPreview({add}) {
    const classes = useStyles();
    const { state: { data } } = useLocation();
    const { name, img, by, price, contents, nutrition } = data;

    let [alert, setAlert] = useState(false);

    useEffect(() => {
        gsap.timeline()
        .from('.fadedown', {duration: 2, opacity: 0, y: -50, ease: 'power2.easeOut'}, '-=1')
        .from('.card-img', {duration: 2 , height: 0, ease: 'power2.easeOut'}, '-=1');
    }, []);

    const addToCart = () => {
        console.log('add event', add)
        if(alert)
            return;
        
        add(data);
        setAlert(true);

        setTimeout(() => {
            setAlert(false);
        }, 2000)
    }

    return (
        <section className={classes.root}>
            {
                alert && (
                <Alert severity="success" className={classes.alert}>
                <AlertTitle>Success</AlertTitle>
                Item was added to cart
                </Alert>)
            }
            <div className={classes.col1}>
                <img src={img} alt="preview" className={`${classes.img} card-img`}/>
            </div>
            <Box pt={7} pb={7} className={`${classes.col2} fadedown`}>
                <div className={classes.colContainer}>
                    <Typography variant="h3" gutterBottom>{name}</Typography>
                    <Typography variant="h4" gutterBottom>Contents</Typography>
                    <ul className={classes.content}>
                        {
                            contents &&
                            contents.map(content => (
                                <li>{content}</li>
                            ))
                        }
                    </ul>
                    <div className={classes.btnGroup}>
                        <Button 
                            color="primary" 
                            className={classes.btn}
                        >Buy Now</Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className={classes.btn}
                            onClick={addToCart}
                        >Add to Cart</Button>
                    </div>
                </div>
            </Box>
        </section>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '73px',
        boxSizing: 'border-box',
        textAlign: 'center',
        height: '100vh',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        color: theme.palette.secondary.contrastText,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    col1: {
        flex: 2,
        backgroundColor: theme.palette.secondary.main,
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            height: '200px'
        }
    },
    col2: {
        flex: 3,
        backgroundColor: theme.palette.secondary.main,
        height: '100%',
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3)
        }
    },
    colContainer: {
        minHeight: '100%',
        width: '100%',
        maxWidth: '400px',
        position: 'relative',
    },
    content: {
        overflow: 'auto'
    },
    btnGroup: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        alignSelf: 'flex-end'
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    btn: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    alert: {
        position: 'absolute',
        top: 80,
        left: 0,
        right: 0,
        zIndex: 5,
        margin: '0 auto',
        width: '90%',
        maxWidth: '220px'
    }
}));

const mapDispatchToProps = (dispatch) => ({
    add: (product) => {
        console.log('dispatchpeoprs')
        dispatch({
        type: actions.ADD_TO_CART,
        payload: { product }
    })},
});

export default connect(null, mapDispatchToProps)(ProductPreview);
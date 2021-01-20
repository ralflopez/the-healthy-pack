import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import hero from '../../../assets/Landing/hero.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHistory } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const classes = useStyles();
    let history = useHistory();

    //ref
    let section = useRef(null);
    let paper = useRef(null);
    let call = useRef(null)
    let image = useRef(null);

    //animations
    useEffect(() => {
        const tl = gsap.timeline();

        tl.set(section, {visibility: 'visible'})
        .from(paper, {duration: 0.5, opacity: 0, y: -25, ease: 'power3.easeOut'})
        .from(call, {duration: 0.5, opacity: 0, y: 25, ease: 'power3.easeOut'}, '-=0.5')
        .from(image, {duration: 1, opacity: 0, scale: 1.6, ease: 'power3.easeOut'}, '-=0.5')
    }, []);

    return (
        <section className={classes.root} style={{visibility: 'hidden'}}>
            <div className={classes.itemContainer} ref={s => section = s} >
                <Paper elevation={6} className={classes.paper} ref={p => paper = p}>
                    <Box p={5} pb={10}>
                        <Typography variant="h2" gutterBottom style={{fontWeight: 700}}>The Healthy Pack</Typography>
                        <Typography variant="h6">Healthy foods. Packed for your convinience</Typography>
                    </Box>
                </Paper>
                <img src={hero} alt="food.jpg" className={classes.image} ref={i => image = i} style={{backgroundSize: ''}}/>
                <Button 
                    variant="contained" 
                    color="secondary"
                    className={`${classes.callToAction} ${classes.btnLrg}`}
                    ref={c => call = c}
                    onClick={() => history.push('/products')}
                >Order</Button>
            </div>
        </section>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '73px',
        height: '100vh',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    },
    paper: {
        textAlign: 'center',
        width: '90%',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        top: '-18%',
        zIndex: 1,
        [theme.breakpoints.down('xs')]: {
            top: theme.spacing(2)
        }
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        objectFit: 'cover'
    },
    btnLrg: {
        fontSize: '1.3em',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6)
    },
    callToAction: {
        position: 'relative',
        top: '10%',
        zIndex: 1,
        [theme.breakpoints.down('xs')]: {
            top: - theme.spacing(2)
        }
    },
    itemContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70%',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            height: '100%',
            justifyContent: 'flex-start'
        }
    }
}));

export default Hero;
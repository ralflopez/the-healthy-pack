import { makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Delivered({ imgSrc, primary, primary2, secondary }) {
    const classes = useStyles();

    let section = useRef(null);
    let image = useRef(null);
    let caption = useRef(null);

    //animation
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'center center',
                scrub: 1,
            }
        });
        tl.from(image, {duration: 1, opacity: 0, x: -200, ease: 'power1.easeOut'})
        .from(caption, {duration: 1, opacity: 0, y: -100, ease: 'power1.easeOut'}, '-=0.5')
    }, [])

    return (
        <>
            <section className={classes.root} ref={s => section = s}>
                <div className={classes.itemContainer}>
                    <Paper elevation={6} pb={2} className={classes.col1} ref={p => image = p}>
                        <img src={imgSrc} alt="delivered.jpg" className={classes.fill}/>
                    </Paper>
                    <Typography variant="h3" className={classes.col2} ref={c => caption = c}>
                        {primary && primary + ' '}
                        <span className={classes.secondary}>{secondary && secondary}</span> 
                        {primary2 && ' ' + primary2}</Typography>
                </div>
            </section>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '73px',
        minHeight: '80vh',
        boxSizing: 'border-box',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    itemContainer: {
        // backgroundColor: 'rebeccapurple',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70%',
        width: '90%',
        maxWidth: '1000px',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
            justifyContent: 'flex-start',
            flexDirection: 'column'
        }
    },
    col1: {
        height: '350px',
        width: '45%',
        position: 'relative',
        top: - theme.spacing(7),
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            top: 0
        },
    },
    col2: {
        width: '45%',
        fontSize: '5em',
        fontWeight: 600,
        wordBreak: 'break-word',
        textAlign: 'left',
        paddingLeft: theme.spacing(5),
        position: 'relative',
        top: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: '4em',
            top: 0,
            marginTop: theme.spacing(4)
        }
    },
    fill: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    secondary: {
        color: theme.palette.secondary.main
    }
}));

export default Delivered;
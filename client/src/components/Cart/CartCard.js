import { IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import sample from '../../assets/sample.jpg';

function Card({ id, info }) {
    const classes = useStyles();

    return (
        <Paper 
            elevation={6} 
            className={`${classes.root} fadedown`}
        >
            <div className={classes.left}>
                <Paper elevation={0} className={classes.imgContainer}>
                    <img src={sample} alt="preview" className={classes.prevImg}/>
                </Paper>
                <Typography variant="h5" className={classes.title}>Product 1</Typography>
            </div>
            <div className={classes.left}>
                <Typography variant="body1" className={classes.price}>P 120.00</Typography>
                <IconButton className={classes.delButton}>
                    <CloseIcon/>
                </IconButton>
            </div>
        </Paper>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '150px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: theme.spacing(2),
        marginLeft: 0,
        padding: theme.spacing(2),
        cursor: 'pointer',
    },
    imgContainer: {
        width: '100%',
        maxWidth: '200px',
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '90px'
        }
    },
    prevImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        backgroundColor: theme.palette.secondary.main
    },
    title: {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            fontSize: '1em'
        }
    },
    price: {
        color: theme.palette.secondary.main,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1em'
        }
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        // [theme.breakpoints.down('sm')]: {
        //     flexDirection: 'column'
        // }
    },
    delButton: {
        marginLeft: theme.spacing(2),
    }
}))

export default Card;
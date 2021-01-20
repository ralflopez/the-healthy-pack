import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import sample from '../../assets/sample.jpg';

function Card({ id, info, add }) {
    const classes = useStyles();
    let history = useHistory();

    const redirectToItem = () => {
        history.push({
            pathname: '/product',
            search: `?item=${id}`
        })
    }

    return (
        <Paper 
            elevation={6} 
            className={`${classes.root} fadedown`}
            onClick={redirectToItem}
        >
            <img src={sample} alt="preview" className={`${classes.prevImg} card-img`}/>
            <Typography variant="h5">Product 1</Typography>
            <Typography variant="body1" className={classes.price}>P 120.00</Typography>
        </Paper>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        height: '350px',
        maxWidth: '300px',
        display: 'inline-block',
        margin: theme.spacing(2),
        marginLeft: 0,
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.8
        }
    },
    prevImg: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main
    },
    price: {
        color: theme.palette.secondary.main,
        marginTop: theme.spacing(2)
    }
}));

export default Card;
import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

function Card({ product, add }) {
    const { _id, name, img, price } = product;

    const classes = useStyles();
    let history = useHistory();

    const redirectToItem = () => {
        history.push({
            pathname: '/product',
            search: `?id=${_id}`,
            state: {
                data: product
            }
        });
    }

    return (
        <Paper 
            elevation={6} 
            className={`${classes.root} fadedown`}
            onClick={redirectToItem}
        >
            <img src={img} alt="preview" className={`${classes.prevImg} card-img`}/>
            <div className={classes.info}>
                <Typography variant="h5" className={classes.title}>{name}</Typography>
                <Typography variant="body1" className={classes.price}>P {price}.00</Typography>
            </div>
        </Paper>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        height: '360px',
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
    },
    info: {
        width: '100%',
        height: '150px',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    title: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        height: '70px',
    }
}));

export default Card;
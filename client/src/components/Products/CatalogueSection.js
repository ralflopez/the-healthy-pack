import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Card from './Card';

function CustomizeSection({ products }) {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Typography variant="h4" align="left" gutterBottom className={`${classes.title} title`}>Products</Typography>
            <div className={classes.itemContainer}>
                {
                    products.length > 0 &&
                    products.map(product => (
                        <Card product={product}/>
                    ))
                }
            </div>
        </section>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '73px',
        paddingBottom: theme.spacing(5),
        boxSizing: 'border-box',
        textAlign: 'center',
        width: '90%',
        maxWidth: '1000px',
        margin: '0 auto'
    },
    title: {
        fontWeight: 700
    },
    itemContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
        }
    }
}))

export default CustomizeSection;
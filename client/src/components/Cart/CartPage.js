import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Card from './CartCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function CartPage({ cart }) {
    const classes = useStyles();
    let total = 0;

    useEffect(() => {
        gsap.timeline()
        .from('.title', {duration: 0.5, opacity: 0, y: -50, ease: 'power2.easeOut'})
        .from('.fadedown', {duration: 1.2, opacity: 0, y: -50, ease: 'power2.easeOut'}, '-=1')
        .from('.card-img', {duration: 1.2, height: 0, ease: 'power2.easeOut'}, '-=1')
    }, []);

    return (
        <section className={classes.root}>
            <Typography variant="h4" align="left" gutterBottom className={`${classes.title} title`}>Cart</Typography>
            <div className={classes.itemContainer}>
                {
                    cart &&
                    cart.map(item => {
                        total += (item.product.price * item.quantity);
                        return <Card product={item.product} quantity={item.quantity}/>
                    })
                }
                <div>
                    <Typography variant="body1" className={classes.priceContainer}>Total: 
                        <span id="price" className={classes.price}>P {total}</span>
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        className={classes.btn}
                    >Checkout</Button>
                </div>
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
        textAlign: 'right'
        // [theme.breakpoints.down('md')]: {
        //     justifyContent: 'center'
        // }
    },
    priceContainer: {
        margin: theme.spacing(2),
        marginTop: theme.spacing(4),
        color: theme.palette.secondary.main
    },
    price: {
        marginLeft: theme.spacing(2),
        color: theme.palette.primary.contrastText
    },
    btn: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
}));

const mapStateToProps = (state) => ({
    cart: state.cart
});


export default connect(mapStateToProps)(CartPage);
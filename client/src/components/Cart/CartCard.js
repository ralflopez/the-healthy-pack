import { FormControl, IconButton, Input, InputLabel, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import DeleteIcon from '@material-ui/icons/Delete';

function Card({ product, quantity, remove, setQuantity }) {
    const classes = useStyles();
    const { _id, name, img, price } = product;

    const handleDelete = () => {
        remove(_id);
    }

    const handleQuantity = (e) => {
        setQuantity(_id, e.target.value);
    }

    return (
        <Paper 
            elevation={6} 
            className={`${classes.root} fadedown`}
        >
            <div className={classes.left}>
                <Paper elevation={0} className={classes.imgContainer}>
                    <img src={img} alt="preview" className={classes.prevImg}/>
                </Paper>
                <Typography variant="h5" className={classes.title}>{name}</Typography>
            </div>
            <div className={classes.left}>
                <Input type="number" inputProps={{min: 0, max: 50}} value={quantity} onChange={handleQuantity}/>
                <Typography variant="body1" className={classes.price}>P {quantity * price}</Typography>
                <IconButton className={classes.delButton} onClick={handleDelete}>
                    <DeleteIcon/>
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
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
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
    },
    qbtn: {
        marginLeft: theme.spacing(2),
        padding: 0,
        color: theme.palette.secondary.main,
    },
}));

const mapDispatchToProps = (dispatch) => ({
    remove: (id) => dispatch({
        type: actions.REMOVE_FROM_CART,
        payload: {
            id
        }
    }),
    setQuantity: (id, quantity) => dispatch({
        type: actions.SET_QUANTITY,
        payload: {
            id, quantity
        }
    })
})

export default connect(null, mapDispatchToProps)(Card);
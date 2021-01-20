import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

function CustomizeSection() {
    const classes = useStyles();
    let history = useHistory();

    return (
        <section className={classes.root}>
            <Typography variant="h4" align="left" gutterBottom className={`${classes.title} title`}>Customize</Typography>
            <div>
                <Button 
                variant="contained" 
                color="secondary" 
                className={`${classes.btn} fadedown`}
                onClick={() => history.push('/customize')}
                >Customize</Button>
            </div>
        </section>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '73px',
        boxSizing: 'border-box',
        textAlign: 'center',
        width: '90%',
        maxWidth: '1000px',
        margin: '0 auto'
    },
    btn: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        width: '50%'
    },
    title: {
        fontWeight: 700
    }
}))

export default CustomizeSection;
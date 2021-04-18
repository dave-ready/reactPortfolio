import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Grid, Box, Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar.js';



const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
            borderColor: "tan",
        },
        },
    },
})(TextField);

const useStyles = makeStyles();

const Contact = () => {

const classes = useStyles();   

    return (
        <>
        <Navbar />
        <Box component="div" variant="h1">
            <Grid container justify="center">
                <Box component="form">    
            <Typography variant="h5">
               Hire or Contact Me!
            </Typography>
            <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            />
            </Box>
            </Grid>
        </Box>
        </>
    )   
};

export default Contact

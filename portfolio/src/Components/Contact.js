import { Typography } from '@material-ui/core'
import React from 'react'
import Navbar from './Navbar.js'
import { makeStyles } from "@material-ui/core/styles";
import { Box, FormControl, Button } from "@material-ui/core";


const Contact = () => {

    return (
        <>
        <Navbar />
        <Box component="header" variant="h1">
            <Typography>
                CONTACT COMPONENT
            </Typography>
        </Box>
        </>
    )   
};

export default Contact

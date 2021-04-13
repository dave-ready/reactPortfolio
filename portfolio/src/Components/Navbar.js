
import React from 'react'
import { AppBar,  Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';


const Navbar = () => {
    return (
        <Box component= "nav">
           <AppBar position="static" style={{background: "#222"}}>
               <Toolbar>
                   <IconButton>
                   <ArrowBack style={{color: "red"}}/>
                   </IconButton>
               </Toolbar>
           </AppBar>
        </Box>
    )
};

export default Navbar;

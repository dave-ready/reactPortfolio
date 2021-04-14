import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    AppBar,  
    Toolbar, 
    ListItem, 
    IconButton,
    ListItemIcon, 
    ListItemText, 
    Avatar, 
    Divider, 
    List, 
    Typography, 
    Box 
} from '@material-ui/core';
import { 
    ArrowBack, 
    AssignmentInd, 
    Home,
    ContactMail, 
    Apps,  
} from '@material-ui/icons';
import avatar from "../avatar.png";


//CSS STYLES
const useStyles = makeStyles({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "30rem"
    }
})
    //avatar: {
    //    display: "block",
    //    margin: "0.5rem auto",
    //    width: theme.spacing(13),
    //    height: theme.spacing(13)
    //}

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
    },
]

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
        <Box className={classes.menuSliderContainer} component="div">
          <Avatar className={classes.avatar} src={avatar} alt="reactAvatar" />  
          <Divider />
          <List>
              {menuItems.map((listItem, key)=>(

                <ListItem button>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText/>
                
              </ListItem>
            ))}
          </List>
        </Box>
        <Box component="nav">
           <AppBar position="static" style={{ background: "#222" }}>
               <Toolbar>
                   <IconButton>
                   <ArrowBack style={{ color: "tomato" }} />
                   </IconButton>
                   <Typography variant="h5" style={{ color: "tan" }}>
                      Portfolio
                   </Typography>
               </Toolbar>
           </AppBar>
        </Box>
        </>
    )
};

export default Navbar;

import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
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
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "30rem"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan",
    },
}));
   

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
    const [state, setState] = useState ({
        right: false,
    })

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    });
    const classes = useStyles();

    const sideList = slider => (

        <Box 
        className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(slider, false)}
        >
          <Avatar className={classes.avatar} src={avatar} alt="reactAvatar" />  
          <Divider />
          <List>
              {menuItems.map((listItem, key)=>(

                <ListItem button key={key}>
                <ListItemIcon className={classes.listItem}>
                   {listItem.listIcon}
                </ListItemIcon>
                <ListItemText 
                  className={classes.listItem}
                  primary={listItem.listText}
                  />
              </ListItem>
            ))}
          </List>
        </Box>
        )

    return (
        <>
        
        <Box component="nav">
           <AppBar position="static" style={{ background: "#222" }}>
               <Toolbar>
                   <IconButton onClick={toggleSlider("right", true)}>
                   <ArrowBack style={{ color: "tomato" }} />
                   </IconButton>
                   <Typography variant="h5" style={{ color: "tan" }}>
                      Portfolio
                   </Typography>
                   <MobileRightMenuSlider 
                   anchor="right" 
                   open={state.right}
                   onClose={toggleSlider("right", false)}>
                     {sideList("right")}
                   </MobileRightMenuSlider>
               </Toolbar>
           </AppBar>
        </Box>
        </>
    )
};

export default Navbar;

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigstion-root": {
           minWidth: 0,
           maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "#FFB300",
                fontSize: "1.8rem",
            }
        }
    },
});

const Footer = () => {
    const classes = useStyles();
    
    return (

        
        
      <BottomNavigation  width="auto" style={{ background: "#291C8F" }}>
            <IconButton 
            className={classes.root} 
            aria-label="Github.com" 
            onClick={() => window.open('https://github.com/dave-ready', "_blank")}>
            <GitHubIcon fontSize="large" />
            </IconButton>
            
           
            <IconButton 
            className={classes.root} 
            aria-label="Linkedin.com" 
            onClick={() => window.open('https://www.Linkedin.com', "_blank")}>
            <LinkedInIcon fontSize="large" />
            </IconButton>
    
        </BottomNavigation>
  
    )
}

export default Footer






//className={classes.root}
//style={{padding: 0}}
//icon={<LinkedInIcon
//    rel="noreferrer"
//    target="_blank" 
//    onClick={event =>  window.location.href='https://www.linkedin.com/in/david-ready-a515411b9/'}
//    />}
//    >   




    //</BottomNavigation>
    //   <BottomNavigationAction 
    //      className={classes.root}
    //      icon={<GitHubIcon/>}>
    //        <a href={"https://github.com/dave-ready"} 
    //        target="_blank"
    //        rel="noreferrer">
    //        <GitHubIcon
    //        size="small" 
   //         color="#69f0ae"                        
   //         label="View App">
   //         </GitHubIcon>
   //         </a>
   //         </BottomNavigationAction>

    //    <BottomNavigationAction
    //      className={classes.root}
    //      icon={<LinkedInIcon/>}> 
    //      <a href={"https://www.linkedin.com/in/david-ready-a515411b9/"} 
    //        target="_blank"
    //        rel="noreferrer">
    //       <LinkedInIcon
    //          size="small" 
    //          color="#69f0ae"
    //          label="View App">
     //       </LinkedInIcon>
     //     </a>
     //   </BottomNavigationAction>
     //   </BottomNavigation>
        




 



        






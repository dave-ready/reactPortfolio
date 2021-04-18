import React from 'react';
import Navbar from './Navbar';
import {makeStyles} from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import Project1 from "../Images/theDadabase.png";
import Project2 from "../Images/weatherDashboard.png";
import Project3 from "../Images/workDayScheduler.png";
import Project4 from "../Images/theDadabase.png";


const useStyles = makeStyles({
    mainContainer: {
      background: "#004d40",
      height: "100%",  
    },
    cardContent: {
        background: "#fff3e0",
        text:"black"
    },
    cardContainer: {
        maxWidth: "345",
        margin: "3rem",
        margin: "5rem auto",
        borderWidth: "3rem"
    },
})

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
        <Navbar />
           <Grid container justify="center">
               {/* Project 1 */}
               <Grid item xs={12} sm={8} md={6}>

             <Card className={classes.cardContainer}>
                 <CardActionArea>
                     <CardMedia 
                     component="img"
                     alt="Project 1"
                     height="400"
                     image={Project1}
                     />
                    </CardActionArea>
                     <CardContent className={classes.cardContent}>
                         <Typography gutterBottom variant="h5" align="center">
                             The Dadabase
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                             Et adipisicing elit deserunt deserunt ea quis adipisicing tempor commodo. 
                         </Typography>
                     </CardContent>
                     <CardActions className={classes.cardContent}>
                         <Button size="small" color="primary" backgroundColor="#69f0ae">
                             View App
                         </Button>
                         <Button size="small" color="primary">
                             Github Repo
                         </Button>
                     </CardActions>
             </Card>

             <Card className={classes.cardContainer}>
                 <CardActionArea>
                     <CardMedia 
                     component="img"
                     alt="Project 2"
                     height="400"
                     image={Project2}
                     />
                     </CardActionArea>
                     <CardContent className={classes.cardContent}>
                         <Typography gutterBottom variant="h5" align="center">
                            Weather Dashboard
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                             Et adipisicing elit deserunt deserunt ea quis adipisicing tempor commodo. 
                         </Typography>
                     </CardContent>
                     <CardActions className={classes.cardContent}>
                         <Button size="small" color="#69f0ae">
                             View App
                         </Button>
                         <Button size="small" color="primary">
                             Github Repo
                         </Button>
                     </CardActions>
             </Card>

             <Card className={classes.cardContainer}>
                 <CardActionArea>
                     <CardMedia 
                     component="img"
                     alt="Project 3"
                     height="400"
                     image={Project3}
                     />
                      </CardActionArea>
                     <CardContent className={classes.cardContent}>
                         <Typography gutterBottom variant="h5" align="center">
                             Workday Scheduler
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                             Et adipisicing elit deserunt deserunt ea quis adipisicing tempor commodo. 
                         </Typography>
                     </CardContent>
                     <CardActions className={classes.cardContent}>
                         <Button size="small" color="#69f0ae">
                             View App
                         </Button>
                         <Button size="small" color="primary">
                             Github Repo
                         </Button>
                     </CardActions>
             </Card>

             <Card className={classes.cardContainer}>
                 <CardActionArea>
                     <CardMedia 
                     component="img"
                     alt="Project 4"
                     height="400"
                     image={Project4}
                     />
                      </CardActionArea>
                     <CardContent className={classes.cardContent}>
                         <Typography gutterBottom variant="h5" align="center">
                             Project 4
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                             Et adipisicing elit deserunt deserunt ea quis adipisicing tempor commodo. 
                         </Typography>
                     </CardContent>
                     <CardActions className={classes.cardContent}>
                         <Button size="small" color="#69f0ae">
                             View App
                         </Button>
                         <Button size="small" color="primary">
                             Github Repo
                         </Button>
                     </CardActions>
             </Card>
           </Grid>
         </Grid>
       </Box>
    );
};

export default Portfolio

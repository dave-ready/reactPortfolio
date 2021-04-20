import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
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
      background: "#233",
      //background: "#004d40",
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

const Project = () => {
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
                         From Dad to Bad is your one stop shop for all things dad jokes, puns, 
                         and movie one liners. Whether it elicits laughter, tears, groaning, 
                         or a mixture of all three, From Dad to Bad has it all!
                         </Typography>
                     </CardContent>
                     <CardActions className={classes.cardContent}>
                     <a href={"https://aqueous-meadow-09339.herokuapp.com"} 
                         target="_blank"
                         rel="noreferrer">
                        <Button
                         size="small" 
                         color="#69f0ae"
                         label="View App"
                         >View App</Button>
                        </a>

                        <a href={"https://github.com/puentebravo/project2"} 
                         target="_blank"
                         rel="noreferrer">
                        <Button
                         size="small" 
                         color="#69f0ae"
                         label="View App"
                         >Github Repo</Button>
                        </a>
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
                         a weather dashboard app with search functionality to find any given city's 
                         current weather conditions as well as it's projected five-day forecast. 
                         The app uses AJAX to retrieve city data from OpenWeather API and includes 
                         dynamically updated HTML and CSS powered by jQuery. It also displays a 
                         search history which the user can click to access past city searches via 
                         local storage.
                         </Typography>
                     </CardContent>
                     <CardActions className={classes.cardContent}>
                     <a href={"https://dave-ready.github.io/weather_dashboard/"} 
                         target="_blank"
                         rel="noreferrer">
                        <Button
                         size="small" 
                         color="#69f0ae"
                         label="View App"
                         >View App</Button>
                        </a>

                        <a href={"https://github.com/dave-ready/weather_dashboard"} 
                         target="_blank"
                         rel="noreferrer">
                        <Button
                         size="small" 
                         color="#69f0ae"
                         label="View App"
                         >Github Repo</Button>
                        </a>
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
                         This is a simple calendar application that allows a user to save 
                         events for each hour of the  standard workday(9am - 5pm). This app 
                         runs in the browser and features dynamically updated HTML and CSS 
                         powered by jQuery.
                         </Typography>
                     </CardContent>
                     <CardActions className={classes.cardContent}>
                     <a href={"https://dave-ready.github.io/dayScheduler/"} 
                         target="_blank"
                         rel="noreferrer">
                        <Button
                         size="small" 
                         color="#69f0ae"
                         label="View App"
                         >View App</Button>
                        </a>

                        <a href={"https://github.com/dave-ready/dayScheduler"} 
                         target="_blank"
                         rel="noreferrer">
                        <Button
                         size="small" 
                         color="#69f0ae"
                         label="View App"
                         >Github Repo</Button>
                        </a>
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
                             Farmwise Fresh Eats
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                             Et adipisicing elit deserunt deserunt ea quis adipisicing tempor commodo. 
                         </Typography>
                     </CardContent>

                     <CardActions className={classes.cardContent}>
                     <a href={"https://ericfreyer.github.io/Farmwise_FreshEats/"} 
                         target="_blank"
                         rel="noreferrer">
                        <Button
                         size="small" 
                         color="#69f0ae"
                         label="View App"
                         >View App</Button>
                        </a>

                        <a href={"https://github.com/ericfreyer/Farmwise_FreshEats"} 
                         target="_blank"
                         rel="noreferrer">
                        <Button
                         size="small" 
                         color="#69f0ae"
                         label="View App"
                         >Github Repo</Button>
                        </a>
                        </CardActions>
             </Card>
           </Grid>
         </Grid>
         <Footer />
       </Box>
    );
};

export default Project

                //     <CardActions className={classes.cardContent}>
                //         <Button size="small" color="#69f0ae">
                //             View App
                //         </Button>
                //         <Button size="small" color="primary">
                //             Github Repo
                //         </Button>
                //    </CardActions>

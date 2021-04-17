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
//import Project2


const Portfolio = () => {
    return (
        <Box component="div">
        <Navbar />
           <Grid container justify="center" alignItems="center">
               <Grid item xs={12} sm={8} md={6}>
               

             <Card>
                 <CardActionArea>
                     <CardMedia 
                     component="img"
                     alt="Project 1"
                     height="165"
                     image={Project1}
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5" align="center">
                             The Dadabase
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                             Et adipisicing elit deserunt deserunt ea quis adipisicing tempor commodo. 
                         </Typography>
                     </CardContent>
                     <CardActions>
                         <Button size="small" color="primary">
                             View App
                         </Button>
                         <Button size="small" color="primary">
                             Github Repo
                         </Button>

                     </CardActions>
                 </CardActionArea>
             </Card>
           </Grid>
         </Grid>
       </Box>
    );
};

export default Portfolio

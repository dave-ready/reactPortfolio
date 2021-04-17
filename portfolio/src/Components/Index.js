import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
//import Paper from 'material-ui/Paper';
import Particles from 'react-particles-js';
import { makeStyles } from "@material-ui/core/styles";
//import"./Index.css";
import Image from '../Images/80sgrid3.png';
//import Background from "../Images/80sgrid3.png";


//CSS STYLING
const useStyles = makeStyles({
  //paperContainer: {
  //  backgroundImage: `url(${Image})`,
//},
    particlesCanva: {
        position: "absolute",
        opacity: "0.3"
    }
    //body: {
    //  background: "../Images/80sgrid3.png",
   // }
});





const Home = () => {
    const classes = useStyles();

    return (
        <>
        <Navbar />
        <Header />
        <Particles
        canvasClassName={classes.particlesCanva}

          params={{

            particles: {
                number: {
                    value: 45,
                    density: {
                    enable: true,
                    value_area: 900
                 }       
                },
                shape: {
                    type: "star",
                    stroke: {
                      width: 1,
                      color: "tomato"
                  }
                },
                size: {
                    value: 8,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 6,
                        size_min: 0.1,
                        sync: true
                    }
                },
                opacity: {
                    value: 1,
                    random: true,
                    anim: {
                        enable:true,
                        speed: 5,
                        opacity_min: 0.1,
                        sync: true

                    }
                }
              }


            }}

          />
        </>
      )
    };

export default Home


//<Paper style={classes.paperContainer}>
        // Some text to fill the Paper Component
        //</Paper>  


        
//export default class Home extends React.Component{
//  render(){
//      return(
//          <Paper style={styles.paperContainer}>
//              Some text to fill the Paper Component
//          </Paper>
//      )
//  }
//}










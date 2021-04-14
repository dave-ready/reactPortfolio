import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from "react-typed";
import avatar from "../avatar.png";

//CSS Styling

const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(15)
    }
}))

const Header = () => {
    return (
        <Box>
            <Avatar src={avatar} alt="David T Ready" />
            <Typography variant="h4">
                <Typed strings={["David T Ready"]} />
            </Typography>
            <br/>
            <Typography variant="h5">
                <Typed 
                strings={["Web Design", "Web Development", "MERN Stack"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </Typography>
        </Box>
    );
};

export default Header;

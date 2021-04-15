import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles;

const Resume = () => {
    return (
      <>
      <Box component="header">
        <Typography variant="h3" align="center">
      WORKING EXPERIENCE
      </Typography>
      <Box component="div">
        <Typography variant="h4" align="center">
          2003
        </Typography>
      </Box>
      </Box>
      </>
    );  
};

export default Resume

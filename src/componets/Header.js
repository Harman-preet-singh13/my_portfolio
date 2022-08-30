import * as React from 'react';
import {Link} from "react-scroll"


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';





const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});



export default function ButtonAppBar(props) {

  return (
    
    <div id ="header">
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar>

              <Typography variant="h3" component="h6" sx={{ flexGrow: 1 }}>
                <PersonIcon />
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} className='header'>
                  <Button color="inherit">Harmanpreet Singh</Button>
                </Link>
              </Typography>
              
              <ArticleIcon />
              <Link activeClass="active" to="project-index" spy={true} smooth={true} offset={50} duration={500} className='header'>
                  <Button color="inherit" >Projects</Button>
                  </Link>
              <InfoIcon />
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className='header'>
                  <Button color="inherit" >About</Button>
                  </Link>
              <ContactPageIcon />
              <Link activeClass="active" to="footer" spy={true} smooth={true} offset={50} duration={500} className='header'>
                  <Button color="inherit" >contact</Button>
                  </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
 
    </div>

  );
}
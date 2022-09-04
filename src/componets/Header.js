import * as React from 'react';
import { Link } from "react-scroll"

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
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const drawerWidth = 240;

export default function ButtonAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} className='header'>
          <Button color="inherit">Harmanpreet Singh</Button>
        </Link>
      </Typography>
      <Divider />
      <List>
        <Toolbar>

          <Stack >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText />
                <Link activeClass="active" to="project-index" spy={true} smooth={true} offset={50} duration={500} className='header'>
                  <Button color="inherit" >Projects</Button>
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText />
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className='header'>
                  <Button color="inherit" >About</Button>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <Link activeClass="active" to="footer" spy={true} smooth={true} offset={50} duration={500} className='header'>
                  <Button color="inherit" >contact</Button>
                </Link>
              </ListItemButton>
            </ListItem>
          </Stack>
        </Toolbar>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <div id="header">
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ display: 'flex' }}>
          <AppBar component="nav" position="fixed">

            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h3" component="h6" sx={{ flexGrow: 1 }}>
                <PersonIcon />
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} className='header'>
                  <Button color="inherit">Harmanpreet Singh</Button>
                </Link>
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
              </Box>
            </Toolbar>
          </AppBar>

          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </ThemeProvider>

    </div>

  );
}
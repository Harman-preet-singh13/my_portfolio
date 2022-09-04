import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./home.css"
import home_page from "./home_page2.2.jpg"

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

function Home() {
    return (
        <div id="home">
           
            <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="home_img">
                <img src={home_page} />
            </div>    
            </ThemeProvider>
            
            
        </div>
    )
}

export default Home


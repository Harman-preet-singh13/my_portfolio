import React from 'react'
import './footer.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 18,
    },
}));
const styles = {

    largeIcon: {
        '& svg': {
            fontsize: 50
        }
    },

};

function Footer2() {
    return (
        <div className="footer">
            <ThemeProvider theme={darkTheme}>
                <AppBar position='static'>
                    <StyledToolbar>
                        <div className="end-note">

                            <Typography variant="h6" component="div" gutterBottom>
                                THANKS FOR VISITING!!
                            </Typography>

                            <Typography variant="h6" component="div" gutterBottom>
                                Message me if you like my portfolio or have any suggestion.
                            </Typography>

                        </div>

                    </StyledToolbar>


                </AppBar>
            </ThemeProvider>
        </div>
    )
}

export default Footer2

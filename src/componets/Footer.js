import React from 'react'
import './footer.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



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


function Footer() {
    return (
        <div id="footer" className="footer">
            <ThemeProvider theme={darkTheme}>
                <AppBar position='static'>
                    <StyledToolbar>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <div className="github-icon">
                                    <IconButton onClick={() => window.open('https://github.com/Harman-preet-singh13')}>
                                        <GitHubIcon fontSize="large" />
                                    </IconButton>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div >
                                    <IconButton onClick={() => window.open('https://www.linkedin.com/in/harman-preet-singh13/')}>
                                        <LinkedInIcon fontSize="large"/>
                                    </IconButton>
                                </div>
                            </Grid>

                        </Grid>


                    </StyledToolbar>
                </AppBar>
                <div className="end-note">

<Typography variant="h6"  component="div" gutterBottom>
    THANKS FOR VISITING!!
</Typography>

<Typography variant="h6" component="div" gutterBottom>
    Message me if you like my portfolio or have any suggestion.
</Typography>
</div>
            </ThemeProvider>
        </div>
    )
}

export default Footer

/* 
                            <div className="end-note">
                                <Grid item md={6}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        THANKS FOR VISITING
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        Message me if you like my portfolio or have any suggestion.
                                    </Typography>
                                </Grid>
                            </div>
*/
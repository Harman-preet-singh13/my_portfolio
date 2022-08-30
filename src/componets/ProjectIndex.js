import React from 'react'
import { Link } from "react-scroll"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';


export default function ProjectIndex() {
    return (
        <div className='home-spacing' id="project-index">
            <Typography variant="h2" component="div" gutterBottom>
                Project Index
            </Typography>
            <hr></hr>
            <Stack
                divider={<Divider orientation="vertical" flexItem />}
                spacing={5}
            >
                <Typography variant="h4" component="div" gutterBottom>
                    <Grid item xs={4}>
                        1. Tic-Tac-Toe
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="tac-tac-toe" spy={true} smooth={true} offset={50} duration={600} >

                            <ArrowForwardIcon />
                            <Button color="inherit">Click here </Button>
                            <ArrowBackIcon />
                        </Link>
                    </Grid>
                </Typography>

                <Typography variant="h4" component="div" gutterBottom>
                    <Grid item xs={4}>
                        2. Calculator
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="calculator" spy={true} smooth={true} offset={50} duration={500} >

                            <ArrowForwardIcon />
                            <Button color="inherit">Click here </Button>
                            <ArrowBackIcon />
                        </Link>
                    </Grid>
                </Typography>

                <Typography variant="h4" component="div" gutterBottom>
                    <Grid item xs={4}>
                        3. Weather Application
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="weather-app" spy={true} smooth={true} offset={50} duration={500} >

                            <ArrowForwardIcon />
                            <Button color="inherit">Click here </Button>
                            <ArrowBackIcon />
                        </Link>
                    </Grid>
                </Typography>
            </Stack>
        </div>
    )
}

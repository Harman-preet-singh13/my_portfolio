import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function About() {
    return (
        <div id="about">
            <hr></hr>
            <Typography variant="h2" component="div" gutterBottom>
                About me
            </Typography>
          
                <Grid item xs={6}>
                    <Typography variant="h4" component="div" gutterBottom>
                        About me
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        I am from Jalandhar, Punjab, India
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        I am currently pursuing my Btech degree in Computer Science
                        From Lovely Professional University.
                    </Typography>
                    <Typography mt={5} variant="h4" component="div" gutterBottom>
                        Skills
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        1. Problem Solving
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        2. Work ethic
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        3. Team player
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        4. Postive attitude
                    </Typography>
                    <Typography mt={5} variant="h4" component="div" gutterBottom>
                        Web Development Journey
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        I started with html, css and javascript but i wanted to
                        learn more. Then I started gathering information about
                        web framework and how they work. I start using django
                        but it was complex for me at that time.
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        Soon I realized that django is a backend. And I need
                        frontend. Then I come to know about react and stated using
                        it. Then I switched django to node.js. As it is more
                        easy to learn as well as easy to use.
                    </Typography>

                </Grid>
        <hr></hr>
           
        </div>
    )
}

export default About
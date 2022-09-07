import React from 'react'
import "./Project.css"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


import calculator from './calculator.gif'
import tik from './tik-tac-toe.gif'
import weather from './Weather-app.gif'



function Projects() {
    return (
        <div id="projects">
            <div className='Header'>
                <Typography variant="h2" component="div" gutterBottom>
                    Projects
                </Typography>
                <hr></hr>
            </div>
            <Stack spacing={2}>
                <div className='tic-tac-toe' id="tac-tac-toe">
                    <Typography variant="h4" component="div" gutterBottom>
                        1. Tic-tac-toe
                    </Typography>
                </div>
                <div className='center'>
                    <img src={tik} alt="tik-tac-toe" className="project_1" />
                </div>
                <CardContent>
                    <Typography mt={-10} variant="h6" component="div" gutterBottom>
                        1. This is was my  first project in React.
                        Here two player can play this game.
                    </Typography>
                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        2. Learning Outcome: Changing screen in real time.
                    </Typography>
                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        3. Problem Faced: Decding who win the game.
                    </Typography>
                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        4. Here I used React for forntend.
                    </Typography>
                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        5. <Typography mt={2} variant="subtitle1" component="div" gutterBottom><a className="link-style" href="https://github.com/Harman-preet-singh13/Tik-tac-toe.git">Github Repo</a></Typography>
                        <br /> <a href="https://codesandbox.io/s/bold-leftpad-jg7mt6" className="link-style">Click here</a> to see working project.
                    </Typography>
                </CardContent>

                <hr></hr>
                <div className='calculator' id="calculator">
                    <Typography variant="h4" component="div" gutterBottom>
                        2. Calculator
                    </Typography>
                </div>
                <div className='center'>
                    <img src={calculator} alt="calculator" className="project_2" />
                </div>
                <CardContent>
                    <Typography mt={-10} variant="h6" component="div" gutterBottom>
                        1. It is basic calculator
                    </Typography>

                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        2. Learning Outcome: Usage of buttons and working with Math.
                    </Typography>
                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        3. Problem Faced: Although making calculator is easy but I face difficulty in
                        working with buttons.
                    </Typography>
                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        4. Here I used React for forntend and Material UI for styling.
                    </Typography>
                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        5.  <Typography mt={2} variant="subtitle1" component="div" gutterBottom><a className="link-style" href="https://github.com/Harman-preet-singh13/React-Calcultor.git">Github Repo</a></Typography>
                        <br /> <a className="link-style" href="https://codesandbox.io/s/relaxed-saha-4nedgb" >Click here</a> to see working project.
                    </Typography>
                </CardContent>

                <hr></hr>
                <div className='weather-app' id="weather-app">
                    <Typography variant="h4" component="div" gutterBottom>
                        3. Weather-app
                    </Typography>
                </div>
                <div className='center'>
                    <img src={weather} alt="weather" className="project_2" />
                </div>
                <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                        1. It is weather app. Which shows Temperature, Time and other thing depending upon your search
                    </Typography>

                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        2. Learning Outcome: Fetching data from web.
                    </Typography>
                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        3. Problem Faced: How to search for loaction and fetch data for that particular area.
                    </Typography>
                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        4. Here I used React for forntend and Material UI for styling. Openweather to fetch data
                    </Typography>
                    <Typography mt={2} variant="h6" component="div" gutterBottom>
                        5.  <Typography mt={2} variant="subtitle1" component="div" gutterBottom><a className="link-style" href="https://github.com/Harman-preet-singh13/React-Weather-app.git">Github Repo</a></Typography>
                        <br /> <a href="https://codesandbox.io/s/nameless-tdd-ki58gu" className="link-style">Click here</a> to see working project.
                    </Typography>
                </CardContent>

                <hr></hr>
            </Stack>
        </div>
    )
}

export default Projects
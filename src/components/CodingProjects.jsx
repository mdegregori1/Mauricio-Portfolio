import React from "react"
import styled from "styled-components"
import Quack from "../img/quackimg.png"
import Quick from "../img/quickimgblue.png"
import Life from "../img/lifegpalogin.png"
import Workout from "../img/workoutlanding.png"

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



export const CodingProjects = () => {

    const visitOne = () => {
        window.open("https://quackhire.com/", "_blank") 
    }

    const visitTwoDeployed = () => {
        window.open("https://www.youtube.com/watch?v=yOytaZO1vLg", "_blank") 
    }

    const visitTwoCode = () => {
        window.open("https://github.com/mdegregori1/Job-Funnel-fe", "_blank")
    }

    const visitThree = () => {
        window.open("https://github.com/Build-Week-WeightLifting-Journal/Backend", '_blank')
    }

    const visitFourDeployed = () => {
        window.open("https://life-gpa.now.sh/", '_blank')
    }

     const visitFourCode = () => {
        window.open("https://github.com/mdegregori1/lifegpa-frontend", '_blank')
    }

    return (
        <AllProjects>
            <Pair>
                <Project>
                    <Name>Quickhire.dev</Name>
                    <Zoom>
                        <ProjectImage src={Quick}/>
                    </Zoom>
                    <Text>
                        <Role>Fullstack Developer</Role>
                        <List>
                            <ListItem>A job site that allows recent graduates to find employment. Graduates can create an account, search top job sites, and save them to their Quickhire dashboard. </ListItem>
                            <ListItem><strong>Tech:</strong> React, Redux, Less, Node/Express/Knex, AWS</ListItem>
                            <ListItem><strong>Frontend:</strong> Styled the site, set up Redux store, and completed 90% of project's CRUD operations, Also, wrote documentation, made the site responsive, and created a dark mode custom hook. </ListItem>
                            <ListItem><strong>Backend:</strong> Assisted in both designing and implementing table relationships for our database.  </ListItem>
                         
                        </List>
                    </Text>
                    <ButtonDiv>
                        <Button onClick={visitTwoCode}>Code</Button>
                        <Button onClick={visitTwoDeployed}>Deployed</Button>
                    </ButtonDiv>
                </Project>
                <Project>
                    <Name>Quackhire.com</Name>
                    <Zoom>
                        <ProjectImage src={Quack}/>
                    </Zoom>
                    <Text>
                        <Role>Frontend Developer</Role>
                        <List>
                            <ListItem>A chrome extension that allows users to streamline their job search process. Users can activate extension on major job sites, and save directly to their Quackhire dashboard.  </ListItem>
                            <ListItem><strong>Tech:</strong> React, Redux, Less, Node/Express/Knex, Heroku</ListItem>
                            <ListItem><strong>Frontend:</strong> Styled the entire frontend, created the landing page, pulled job data from extension to the frontend dashboard, and assisted in creating the UX design. Our goal is to have real users that utilize Quackhire as a job search tool, and my job (outside of development) is to ask for and interpret feedback. Project development currently in progress.  </ListItem>
                         
                        </List>
                    </Text>
                    <ButtonDiv>
                        <SingleButton onClick={visitOne}>Deployed</SingleButton>
                    </ButtonDiv>
                </Project>
            </Pair>
            <Pair>
                <Project>
                    <Name>Weightlifting Journal</Name>
                    <Zoom>
                        <ProjectImage src={Workout}/>
                    </Zoom>
                    <Text>
                        <Role>Backend Developer</Role>
                        {/* <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</Description> */}
                        <List>
                            <ListItem>A site that allows gym-goers to keep track of their workouts, and their progress.  </ListItem>
                            <ListItem><strong>Tech:</strong> Node, Express, Knex, SQLite, PostgreSQL, Heroku</ListItem>
                            <ListItem><strong>Backend:</strong> Designed, created, and deployed the entire Backend API over a 4-day period using Node.js. Created seed data, and provided endpoint documentation to a team of frontend developers. </ListItem>
                        </List>
                    </Text>
                    <ButtonDiv>
                        <SingleButton onClick={visitThree}>Code</SingleButton>
                    </ButtonDiv>
                </Project>
                <Project>
                    <Name>Life GPA</Name>
                    <Zoom>
                        <ProjectImage src={Life}/>
                    </Zoom>
                    <Text>
                        <Role>Frontend Developer</Role>
                        {/* <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</Description> */}
                        <List>
                            <ListItem>A site that helps users keep track of their goals, and their progress towards them by giving them a daily grade. </ListItem>
                            <ListItem><strong>Tech:</strong> React, MaterialUI, Styled-Components, Formik</ListItem>
                            <ListItem><strong>Frontend:</strong> Designed and styled login/register + landing page using MaterialUI and Styled Components, and implemented Formik for user validation. </ListItem>
                        </List>
                    </Text>
                    <ButtonDiv>
                        <Button onClick={visitFourCode}>Code</Button>
                        <Button onClick={visitFourDeployed}>Deployed</Button>
                    </ButtonDiv>
                </Project>
            </Pair>
        </AllProjects>

    )
}

let ListItem = styled.li`
margin: 0;
`
let List = styled.ul`
color: #ffffff;
margin: 2% 0 2% 0;

`
let Text = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 25rem;

`

let Role = styled.p`
color: #ffffff;
text-align: 
`


let ButtonDiv = styled.div`
width: 25rem;
margin-top: 1%;
display: flex;
justify-content: space-evenly;
align-items: center;

`
let SingleButton = styled.button`
color: #ffffff;
background: #BB86FC;
border: #BB86FC;
padding: 3%;
margin: 3% 0 3% 0;
width: 70%;
border-radius: 15px;
font-weight: bold;
&:hover {
    background: #9742ff;
}
`

let Button = styled.button`
color: #ffffff;
background: #BB86FC;
border: #BB86FC;
padding: 3%;
margin: 3% 0 3% 0;
width: 40%;
border-radius: 15px;
font-weight: bold;
&:hover {
    background: #9742ff;
}
`
let Description = styled.p`
margin-top: 0px;
color: #ffffff;
text-align: justify;

`
let Name = styled.h3`
color: #BB86FC;
`
let ProjectImage = styled.img`
width: 25rem;

`

let AllProjects = styled.div`
background: #2a3439;
padding: 5%;

`

let Pair = styled.div`
display: flex;
justify-content: space-evenly;
`

let Project = styled.div`

margin: 1%;
padding: 1%;
width: 40rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 4px solid #36454F;
border-radius: 30px;
`
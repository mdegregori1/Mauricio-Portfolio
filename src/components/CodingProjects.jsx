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
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</Description>
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
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</Description>
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
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</Description>
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
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</Description>
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

let Text = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 25rem;
`

let Role = styled.p`
color: #ffffff;
`


let ButtonDiv = styled.div`
width: 25rem;
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
border: 4px solid #36454F;
border-radius: 30px;
margin: 1%;
padding: 1%;
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
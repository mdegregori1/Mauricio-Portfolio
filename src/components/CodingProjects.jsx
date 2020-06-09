import React from "react"
import styled from "styled-components"
import Me from "../img/me.png"


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
                    <ImageContainer>
                        <ProjectImage src={Me}/>
                    </ImageContainer>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</Description>
                    <ButtonDiv>
                        <Button onClick={visitTwoCode}>Code</Button>
                        <Button onClick={visitTwoDeployed}>Deployed</Button>
                    </ButtonDiv>
                </Project>
                <Project>
                    <Name>Quackhire.com</Name>
                    <ImageContainer>
                        <ProjectImage src={Me}/>
                    </ImageContainer>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</Description>
                    <ButtonDiv>
                        <SingleButton onClick={visitOne}>Deployed</SingleButton>
                    </ButtonDiv>
                </Project>
            </Pair>
            <Pair>
                <Project>
                    <Name>Weightlifting Journal</Name>
                    <ImageContainer>
                        <ProjectImage src={Me}/>
                    </ImageContainer>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam sed, itaque vitae, qui beatae corrupti dolorum ad deserunt molestiae temporibus nostrum placeat aliquid repellat, excepturi quod a id quos.</Description>
                    <ButtonDiv>
                        <SingleButton onClick={visitThree}>Code</SingleButton>
                    </ButtonDiv>
                </Project>
                <Project>
                    <Name>Life GPA</Name>
                    <ImageContainer>
                        <ProjectImage src={Me}/>
                    </ImageContainer>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam sed, itaque vitae, qui beatae corrupti dolorum ad deserunt molestiae temporibus nostrum placeat aliquid repellat, excepturi quod a id quos.</Description>
                    <ButtonDiv>
                        <Button onClick={visitFourCode}>Code</Button>
                        <Button onClick={visitFourDeployed}>Deployed</Button>
                    </ButtonDiv>
                </Project>
            </Pair>
        </AllProjects>

    )
}

let ImageContainer = styled.div`
border: 1px solid #36454F;
overflow: hidden;
`

let ButtonDiv = styled.div`
width: 25rem;
display: flex;
justify-content: space-evenly;
align-items: center;

`
let SingleButton = styled.button`
color: #ffffff;
background: #9742ff;
border: #9742ff;
padding: 3%;
margin: 3% 0 3% 0;
width: 70%;
border-radius: 15px;
font-weight: bold;
&:hover {
    background: #BB86FC;
}
`

let Button = styled.button`
color: #ffffff;
background: #9742ff;
border: #9742ff;
padding: 3%;
margin: 3% 0 3% 0;
width: 40%;
border-radius: 15px;
font-weight: bold;
&:hover {
    background: #BB86FC;
}
`
let Description = styled.p`
color: #ffffff;
text-align: justify;
width: 25rem;
padding: 1%;
`
let Name = styled.h3`
color: #BB86FC;
`
let ProjectImage = styled.img`
width: 25rem;
&:hover {
    transition: transform .5s ease;
    transform: scale(1.5);
}
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
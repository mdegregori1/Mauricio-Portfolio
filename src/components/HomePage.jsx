import React from "react";
import styled from "styled-components"
import CartoonMe from "../img/cartoonme.png"
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {FiMail} from "react-icons/fi"

export const HomePage = () => {
    
    
    return (
        <MainCont>
            <Content>
                <Picture src={CartoonMe}/>
                <Intro>Hey, I'm Mauricio.</Intro>
                <About>
                    <p>I build <BodyTag href="/Projects">projects</BodyTag> using React, Redux, and Node. Also skilled in HTML, CSS, JavaScript, and Python/Flask. </p>
                    <p>I like to write, make videos, skateboard, and make people laugh.</p>
                    <p>Currently learning Angular, and working on <BodyTag href="https://quackhire.com/">Quackhire.</BodyTag></p>
                </About>
                <Social>
                    <Tag href ="https://www.linkedin.com/in/mauricio-degregori/" target="_blank">
                        <FaLinkedinIn size="2rem" color="#ffffff"/>
                    </Tag>
                    <Tag href ="https://github.com/mdegregori1" target="_blank">
                        <FaGithub size="2rem" color="#ffffff"/>
                    </Tag>
                    <Tag href="mailto:degregorimauricio@gmail.com" target="_blank">
                        <FiMail size="2rem" color="#ffffff"/>
                    </Tag>
                </Social>
            </Content>

        </MainCont>
    )
}

let About = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #ffffff;
`
let BodyTag = styled.a`
text-decoration: none;
color: #BB86FC;
`
let Tag = styled.a`
text-decoration: none;
color: black;

`

let Social = styled.div`
width: 20%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 1%;
padding: 1%;
`
let Picture = styled.img`
width: 15rem;
height: 15rem;


`

let MainCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background: #2a3439;

`
let Content = styled.div`

width: 60%;
margin-top: 7%;
padding: 2%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 4px solid #36454F;
border-radius: 30px;

`

let Intro = styled.h3`
text-align: center;
width: 100%;
color: #BB86FC;



`
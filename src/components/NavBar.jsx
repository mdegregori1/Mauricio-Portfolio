import React from "react";
import styled from "styled-components"


export const NavBar = () => {
    return (
        <Container>
            <Name>
                <Me href="/">Mauricio Degregori</Me>
            </Name>
            <Tabs>
                <Categories href="/">Home</Categories>
                <Categories href="/Projects">Projects</Categories>
                <Categories href="https://docs.google.com/document/d/1Ybq8cBsinf0gC-mBLEztyv_qGkNw8gw2Uqet53xC3mE/edit?usp=sharing" target="_blank">Resume</Categories>

            </Tabs>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
background: #2a3439;
height: 8vh;
display: flex;
align-items: center;
justify-content: space-between;
`

const Tabs = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: space-around;
`

const Name = styled.div`
width: 70%;
display: flex;
align-items: center;

`

const Me = styled.a`
text-decoration: none;
margin-left: 2%;
font-weight: bold;
color: #BB86FC;
`
const Categories = styled.a`
text-decoration: none;
color: #ffffff;
&:hover {
    color: #BB86FC;
}

`
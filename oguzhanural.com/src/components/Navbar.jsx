import React from 'react'
import styled from "styled-components";

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Container = styled.div` 
    width: 1200px;
    display: flex;
    justify-content: space-between;
    padding: 25px 0px;
    
`;

const Links = styled.div`
    display: flex;
    gap: 70px;
    align-items: center;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

`;
const Logo = styled.img`
    height: 23px;
`;
const ListItem = styled.li`
    cursor: pointer;
`;
const Icon = styled.img`
    height: 24px;
    cursor: pointer;
`;
const Button = styled.button`
    background-color: #6357e6;
    padding: 8px;
    border-radius: 8px;
    border: none;
    color: white;
    font-weight: 600;
    width: 120px;
    cursor: pointer;
`;

const List = styled.ul`
    display: flex;
    gap: 40px;
    list-style: none;
`;



const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo
                 src="./img/logo.png"
                />
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Portfolio</ListItem>
                    <ListItem>Blog</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon
                 src="./img/search.png"
                />
                <Button>
                    Work Together
                </Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar
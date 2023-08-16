import React from 'react'
import { styled } from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: space-between;

`;
const Left = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

`;
const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Title = styled.h1`
  font-size: 60px;
`;
const WhoAmI = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Subtitle = styled.h2`

`;
const Description = styled.p`
  font-size: 22px;
`;
const Button = styled.button`
    width: 200px;
    background-color: #6357e6;
    padding: 8px;
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 600;
    width: 120px;
    cursor: pointer;
`;
const Image = styled.img`
  height: 500px;
  width: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(50px);
    }
    
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
        <Container>
          <Left>
            <Title>Think different.</Title>
            <WhoAmI>
              <Subtitle>Who Am I</Subtitle>
            </WhoAmI>
            <Description>Open Source enthusiast and full stack web developer from Turkey. </Description>
            {/* Oğuzhan Ural is a Software Engineer who closely follows current software technologies, develops software systems with engineering principles and constantly improves himself. */}
            <Button>Learn More</Button>
          </Left>
          <Right>
            {/* 3d model */}
            <Image src="./img/astronotProgrammer.png" />
          </Right>
        </Container>
    </Section>
  )
}

export default Hero
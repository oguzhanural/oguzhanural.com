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
`;
const Title = styled.h1`
  font-size: 60px;
`;
const WhoAmI = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Line = styled.img`
  height: 9px;
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
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
        <Container>
          <Left>
            <Title>Think different.</Title>
            <WhoAmI>
              <Line src="./img/line.png"/>
              <Subtitle>Who Am I</Subtitle>
            </WhoAmI>
            <Description>Open Source enthusiast and full stack web developer from Turkey.</Description>
            <Button>Learn More</Button>
          </Left>
          <Right>
            {/* 3d model */}
            <Image src="./img/moon.png" />
          </Right>
        </Container>
    </Section>
  )
}

export default Hero
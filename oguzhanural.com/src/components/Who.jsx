import React from 'react'
import { styled } from 'styled-components';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: space-between;

`;
const Left = styled.div`
  flex: 1;

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
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
  font-weight: 400;
  line-height: 30px;
  margin-top: 50px;
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

const Who = () => {
  return (
    <Section>
        <Container>
          <Left>
             {/* 3d model */}
          </Left>
          <Right>
              <Description>
                Oğuzhan Ural is a Software Engineer who closely follows current software 
                technologies, develops software systems with engineering principles and 
                constantly improves himself.
                </Description>
          </Right>
        </Container>
    </Section>
  )
}

export default Who;
import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/device'
import Hero from './Hero'
import cards from '../utils/cards'
import Footer from './Footer'
import Blob from '../components/atoms/Blob'
import arrowRight from '../images/arrow-right-primary.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import services from '../utils/services'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledDescriptionContainer = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 50px;
`

const StyledDescriptionLeft = styled.div`
  width: 90vw;
  padding: 30px 30px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-left: none;
  border-radius: 0 50px 50px 0;

  h2 {
    margin-top: 0;
  }

  p {
    margin: 0;
  }
`

const StyledDescriptionRight = styled.div`
  justify-self: end;
  width: 90vw;
  padding: 20px 30px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-right: none;
  border-radius: 50px 0 0 50px;

  h2 {
    margin-top: 0;
  }

  p {
    margin: 0;
  }
`

const StyledServicesContainer = styled.div`
  display: grid;
  width: 100vw;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`

const StyledTitle = styled.div`
  justify-self: center;
  width: 95vw;
  h2 {
    width: 280px;
    font-size: 7rem;
    font-weight: ${({ theme }) => theme.extraBold};
    letter-spacing: 5px;
    word-break: break-word;
    margin: 0;

    @media ${device.smallMobile} {
      width: 320px;
      font-size: 8.8rem;
    }

    span {
      margin-left: 10px;
    }
  }
`

const StyledDescription = styled.div`
  width: 95vw;
  justify-self: center;
`
const StyledServicesList = styled.div`
  display: grid;
  width: 95vw;
  justify-self: center;

  h3 {
    font-size: 3.5rem;
    letter-spacing: 3px;
    margin-top: 10px;
    margin-bottom: 0;
  }

  ul {
    font-size: 2rem;
    list-style: none;
    padding: 0 10px;

    li {
      margin: 5px;
    }
  }
`
const StyledLinkContainer = styled(AniLink)`
  display: flex;
  align-items: center;
  width: 85%;
  height: 80px;
  justify-self: center;
  margin-bottom: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};

  h3 {
    font-size: 2.4rem;
    letter-spacing: 3px;
    margin: 0;

    @media ${device.smallMobile} {
      font-size: 2.8rem;
    }
  }
`

const StyledProcessContainer = styled.div`
  display: grid;
  width: 100vw;
  margin-top: 30px;

  span {
    color: ${({ theme }) => theme.color.primary};
  }
`

const StyledProcessInnerContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 20px;
  width: 95vw;
  justify-items: center;
  justify-self: center;
`

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 200px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 20px;
  position: relative;

  h3 {
    margin: 0;
    width: 65%;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    letter-spacing: 2px;
    position: absolute;
    top: 130px;
  }
`

const StyledCardImg = styled.div`
  width: 40%;
  height: 70px;
  background-image: ${({ cardImg }) => cardImg && `url(${cardImg})`};
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 50% 50%;
  position: absolute;
  top: 50px;
`

const About = () => {
  return (
    <StyledContainer>
      <Hero title="about me" />
      <StyledDescriptionContainer>
        <StyledDescriptionLeft>
          <h2>Who Am I</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            dolor et esse, est nemo quis vero debitis vel rem maiores itaque
            quibusdam doloremque totam, ut nesciunt optio voluptatum voluptate
            ullam!
          </p>
        </StyledDescriptionLeft>
        <StyledDescriptionRight>
          <h2>What I Do</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            dolor et esse, est nemo quis vero debitis vel rem maiores itaque
            quibusdam doloremque totam, ut nesciunt optio voluptatum voluptate
            ullam!
          </p>
        </StyledDescriptionRight>
        <StyledDescriptionLeft>
          <h2>Why me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            dolor et esse, est nemo quis vero debitis vel rem maiores itaque
            quibusdam doloremque totam, ut nesciunt optio voluptatum voluptate
            ullam!
          </p>
        </StyledDescriptionLeft>
      </StyledDescriptionContainer>
      <StyledServicesContainer>
        <StyledTitle>
          <h2>
            services<span>.</span>
          </h2>
        </StyledTitle>
        <StyledDescription>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fuga
            non facilis ab. Fugit, voluptatibus. Excepturi consequatur iusto
            perferendis inventore, ipsum hic et deleniti dolores ad voluptates
            consectetur ab fugiat!
          </p>
        </StyledDescription>
        <StyledServicesList>
          {services.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.title}</h3>
                <ul>
                  {item.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </StyledServicesList>
        <StyledLinkContainer cover direction="left" to="/" bg="#ff7500">
          <h3>check out my projects</h3>
          <Blob size="60px" icon={arrowRight} iconSize="16px" />
        </StyledLinkContainer>
      </StyledServicesContainer>
      <StyledProcessContainer>
        <StyledTitle>
          <h2>
            process<span>.</span>
          </h2>
        </StyledTitle>
        <StyledDescription>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nostrum accusantium consectetur dignissimos maiores! Dicta ratione
            voluptatibus facilis autem enim non dolorum iusto, veniam odio
            asperiores suscipit quibusdam, illo odit.
          </p>
        </StyledDescription>
        <StyledProcessInnerContainer>
          {cards.map((item, index) => {
            return (
              <StyledCard key={index}>
                <StyledCardImg cardImg={item.image} />
                <h3>{item.title}</h3>
              </StyledCard>
            )
          })}
        </StyledProcessInnerContainer>
      </StyledProcessContainer>
      <Footer />
    </StyledContainer>
  )
}

export default About

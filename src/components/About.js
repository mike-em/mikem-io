import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Hero from './Hero'
import Footer from './Footer'
import cards from '../utils/cards'
import Blob from '../components/atoms/Blob'
import arrowRight from '../images/arrow-right-primary.svg'
import services from '../utils/services'
import { device } from '../utils/device'
import { gsap, CSSPlugin } from 'gsap'

const SmallIconAmination = props => keyframes`
  0% {
    top: 50px;
    left: 30%;
    transform: scale(1)
  }
  100% {
    top: 0px;
    left: -30px;
    transform: scale(0.4)
  }
`

const SmallIconAminationReverse = props => keyframes`
  0% {
    top: 0px;
    left: -30px;
    transform: scale(0.4)
  }
  100% {
    top: 50px;
    left: 30%;
    transform: scale(1)
  }
`

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

  @media ${device.desktop} {
    width: 80vw;
    grid-gap: 60px;
  }

  @media ${device.xl} {
    width: 60vw;
  }
`

const StyledDescriptionLeft = styled.div`
  width: 90vw;
  padding: 30px 30px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-left: none;
  border-radius: 0 50px 50px 0;

  a {
    text-decoration: none;
  }

  @media ${device.smallMobile} {
    width: 90vw;
    padding: 30px 50px;
  }

  @media ${device.tablet} {
    width: 60vw;
    padding: 30px 50px;
  }

  @media ${device.laptop} {
    width: 55vw;
    padding: 50px 90px;
  }

  @media ${device.desktop} {
    border: 2px solid ${({ theme }) => theme.color.primary};
    border-radius: 50px;
    width: 45vw;
    padding: 50px 120px;
  }

  @media ${device.xl} {
    width: 35vw;
    padding: 50px 120px;
  }

  h2 {
    margin-top: 0;

    @media ${device.laptop} {
      font-size: 3rem;
    }
  }

  p {
    margin: 0;

    @media ${device.laptop} {
      line-height: 2.2rem;
    }
  }
`

const StyledDescriptionRight = styled.div`
  justify-self: end;
  width: 90vw;
  padding: 30px 30px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-right: none;
  border-radius: 50px 0 0 50px;

  @media ${device.smallMobile} {
    width: 90vw;
    padding: 30px 50px;
  }

  @media ${device.tablet} {
    width: 60vw;
    padding: 30px 50px;
  }

  @media ${device.laptop} {
    width: 55vw;
    padding: 50px 90px;
  }

  @media ${device.desktop} {
    border: 2px solid ${({ theme }) => theme.color.primary};
    border-radius: 50px;
    width: 45vw;
    padding: 50px 120px;
  }

  @media ${device.xl} {
    width: 35vw;
    padding: 50px 120px;
  }

  h2 {
    margin-top: 0;

    @media ${device.laptop} {
      font-size: 3rem;
    }
  }

  p {
    margin: 0;

    @media ${device.laptop} {
      line-height: 2.2rem;
    }
  }
`

const StyledServicesContainer = styled.div`
  display: grid;
  width: 100vw;
  margin-top: 50px;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`

const StyledTitle = styled.div`
  justify-self: center;
  width: 95vw;

  @media ${device.tablet} {
    width: 90vw;
  }

  @media ${device.laptop} {
    width: 80vw;
  }

  @media ${device.xl} {
    width: 60vw;
  }
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

    @media ${device.tablet} {
      width: 380px;
      font-size: 10rem;
    }

    @media ${device.laptop} {
      width: 420px;
      font-size: 12rem;
    }

    @media ${device.xl} {
      width: 450px;
      font-size: 13rem;
    }

    span {
      margin-left: 10px;
    }
  }
`

const StyledInnerDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 95vw;

  @media ${device.tablet} {
    justify-content: flex-end;
    width: 90vw;
  }

  @media ${device.laptop} {
    justify-content: flex-end;
    width: 80vw;
  }

  @media ${device.xl} {
    justify-content: flex-end;
    width: 60vw;
  }
`

const StyledDescription = styled.div`
  display: flex;
  justify-content: center;
  width: 95vw;
  margin-bottom: 50px;

  @media ${device.tablet} {
    justify-content: flex-end;
    width: 50vw;
  }

  @media ${device.laptop} {
    justify-content: flex-end;
    width: 40vw;
  }

  @media ${device.desktop} {
    justify-content: flex-end;
    width: 30vw;
  }

  @media ${device.xl} {
    justify-content: flex-end;
    width: 20vw;
  }
`

const StyledServicesList = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 95vw;
  justify-self: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    width: 90vw;
    justify-self: end;
    grid-gap: 40px;
  }

  @media ${device.laptop} {
    width: 80vw;
    grid-gap: 80px;
  }

  @media ${device.xl} {
    width: 70vw;
  }

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

  @media ${device.tablet} {
    width: 320px;
    justify-self: flex-end;
    margin: 50px 50px 0 0;
  }

  @media ${device.laptop} {
    margin: 50px 80px 0 0;
  }

  @media ${device.xl} {
    margin: 50px 160px 0 0;
  }

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

  @media ${device.tablet} {
    width: 90vw;
  }

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

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    width: 90vw;
    grid-gap: 80px;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    width: 80vw;
    grid-gap: 50px;
  }

  @media ${device.desktop} {
    grid-gap: 80px;
  }

  @media ${device.xl} {
    width: 60vw;
  }
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

  :hover {
    cursor: pointer;
  }

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.laptop} {
    width: 100%;
  }

  h3 {
    margin: 0;
    width: 65%;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    letter-spacing: 2px;
    position: absolute;
    top: 130px;
    transition: opacity 200ms ease-in-out;
    opacity: ${({ activeCard, cardIndex }) =>
      activeCard === cardIndex ? '0' : '1'};
  }

  p {
    margin: 0;
    width: 70%;
    right: 20px;
    position: absolute;
    color: ${({ theme }) => theme.color.white};
    transition: opacity 200ms ease-in-out;
    opacity: ${({ activeCard, cardIndex }) =>
      activeCard === cardIndex ? '1' : '0'};
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
  left: 30%;
  animation: ${p => SmallIconAminationReverse(p)} 200ms linear forwards;

  ${({ smallImage, imageInxed }) =>
    smallImage === imageInxed &&
    css`
      animation: ${p => SmallIconAmination(p)} 200ms linear forwards;
    `}
`

const About = () => {
  const [showDescription, setShowDescription] = useState(null)
  const [initState, setInitState] = useState(true)

  useEffect(() => {
    let tl = gsap.timeline()

    if (initState) {
      tl.fromTo(
        '#who',
        1,
        { css: { opacity: 0, y: 200 } },
        { css: { opacity: 1, y: 0, visibility: 'visible' } }
      )
        .fromTo(
          '#what',
          1,
          { css: { opacity: 0, y: 200 } },
          { css: { opacity: 1, y: 0, visibility: 'visible' } },
          '-=0.7'
        )
        .fromTo(
          '#why',
          1,
          { css: { opacity: 0, y: 200 } },
          { css: { opacity: 1, y: 0, visibility: 'visible' } },
          '-=0.7'
        )
    }
  }, [initState])

  return (
    <StyledContainer>
      <Hero title="about me" />
      <StyledDescriptionContainer>
        <StyledDescriptionLeft id="who">
          <h2>Who Am I</h2>
          <p>
            I'm Michael, a Full Stack software engineer. I focus on building
            high quality websites and web applications. I always stay on top of
            latest technologies to make sure I can offer you state of the art
            scalable solutions at competitive prices.
          </p>
        </StyledDescriptionLeft>
        <StyledDescriptionRight id="what">
          <h2>What I Do</h2>
          <p>
            I create custom-built, high quality solutions to accommodate your
            business needs. My primary aim is to figure out the best way to help
            your company achieve success and add real value to your business.
          </p>
        </StyledDescriptionRight>
        <StyledDescriptionLeft id="why">
          <h2>Why Me</h2>
          <p>
            My main goal is to offer tailored, highly competitive service. I
            understand that high quality services are essential to your business
            but not always feasible. Large agencies or in-house solution can be
            difficult to resource efficiently. If you have new project in mind,
            don't hesitate to{' '}
            <AniLink
              cover
              direction="up"
              bg="#ff7500"
              duration={0.6}
              to="/contact"
              style={{ color: '#ff7500' }}
            >
              contact me.
            </AniLink>
          </p>
        </StyledDescriptionLeft>
      </StyledDescriptionContainer>
      <StyledServicesContainer>
        <StyledTitle>
          <h2>
            services<span>.</span>
          </h2>
        </StyledTitle>
        <StyledInnerDescriptionContainer>
          <StyledDescription>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fuga
              non facilis ab. Fugit, voluptatibus. Excepturi consequatur iusto
              perferendis inventore, ipsum hic et deleniti dolores ad voluptates
              consectetur ab fugiat!
            </p>
          </StyledDescription>
        </StyledInnerDescriptionContainer>
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
        <StyledInnerDescriptionContainer>
          <StyledDescription>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              nostrum accusantium consectetur dignissimos maiores! Dicta ratione
              voluptatibus facilis autem enim non dolorum iusto, veniam odio
              asperiores suscipit quibusdam, illo odit.
            </p>
          </StyledDescription>
        </StyledInnerDescriptionContainer>
        <StyledProcessInnerContainer>
          {cards.map((item, index) => {
            return (
              <StyledCard
                key={index}
                onClick={() => setShowDescription(index)}
                activeCard={showDescription}
                cardIndex={index}
              >
                <StyledCardImg
                  cardImg={item.image}
                  smallImage={showDescription}
                  imageInxed={index}
                />
                <h3>{item.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti nostrum accusantium consectetur dignissimos maiores!
                </p>
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

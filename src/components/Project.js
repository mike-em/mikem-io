import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { device } from '../utils/device'
import Img from 'gatsby-image'
import Hero from './Hero'
import Footer from './Footer'
import linkIcon from '../images/link-icon-primary.svg'
import githubIcon from '../images/github-link-primary.svg'
import arrowIcon from '../images/arrow-right-primary.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import projects from '../utils/projects'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledDescriptionContainer = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  margin-top: 50px;

  @media ${device.desktop} {
    width: 80vw;
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

  @media ${device.tablet} {
    width: 60vw;
  }

  @media ${device.laptop} {
    width: 55vw;
    padding: 50px 80px;
  }

  @media ${device.desktop} {
    border: 2px solid ${({ theme }) => theme.color.primary};
    border-radius: 50px;
    width: 45vw;
    padding: 50px 120px;
  }

  @media ${device.xl} {
    width: 35vw;
  }

  h2 {
    margin-top: 0;
    letter-spacing: 2px;
    font-size: 3rem;

    @media ${device.tablet} {
      font-size: 4.5rem;
    }
    span {
      color: #ff7500;
      margin-left: 3px;
    }
  }

  ul {
    padding-left: 30px;

    li {
      font-size: 1.8rem;
      letter-spacing: 1px;

      @media ${device.tablet} {
        font-size: 2.2rem;
        margin-top: 5px;
      }
    }
  }
`

const StyledDescriptionRight = styled.div`
  justify-self: end;
  width: 90vw;
  padding: 30px 30px;
  border: 2px solid #ff7500;
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
    padding: 50px 80px;
  }

  @media ${device.desktop} {
    border: 2px solid ${({ theme }) => theme.color.primary};
    border-radius: 50px;
    width: 45vw;
    padding: 50px 120px;
  }

  @media ${device.xl} {
    width: 35vw;
  }

  p {
    margin: 0;

    @media ${device.laptop} {
      line-height: 2.2rem;
    }
  }
`
const StyledImageContainer = styled(Img)`
  margin-top: 50px;
  width: 100vw;
  height: 500px;

  @media ${device.laptop} {
    height: 600px;
  }

  @media ${device.laptop} {
    height: 700px;
  }
`

const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: end;
  margin: 20px 50px 0 0;
  padding: 0 30px;
  width: 200px;
  height: 80px;
  border: 2px solid #ff7500;
  border-radius: 50px;
`

const StyledLink = styled.a`
  width: 50px;
  height: 50px;
  background-image: ${({ bcgImg }) => bcgImg && `url(${bcgImg})`};
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: 50% 50%;
  transition: transform 200ms ease-in-out;

  :hover {
    transform: translateY(-3px);
  }
`

const StyledBottomNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40vw;
  height: 30px;
  margin: 30px 0 -20px 0;
  color: ${({ theme }) => theme.color.primary};

  @media ${device.laptop} {
    font-size: 2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const StyledButtonPrev = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  :hover {
    cursor: pointer;
    img {
      transition: transform 200ms ease-in-out;
      transform: translateX(-3px) rotate(180deg);
    }
  }

  img {
    height: 16px;
    margin-right: 8px;
    transform: rotate(180deg);
  }
`

const StyledButtonNext = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  :hover {
    cursor: pointer;
    img {
      transition: transform 200ms ease-in-out;
      transform: translateX(3px);
    }
  }

  img {
    height: 16px;
    margin-left: 8px;
  }
`

const Project = ({ title, pageContext }) => {
  const data = useStaticQuery(graphql`
    {
      imageOne: file(relativePath: { eq: "imageone.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      imageTwo: file(relativePath: { eq: "imagetwo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      imageThree: file(relativePath: { eq: "imagethree.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <StyledContainer>
      <Hero title={title} />
      <StyledDescriptionContainer>
        <StyledDescriptionRight>
          {pageContext === 'projectOne' && projects[0].description}
          {pageContext === 'projectTwo' && projects[1].description}
          {pageContext === 'projectThree' && projects[2].description}
        </StyledDescriptionRight>
      </StyledDescriptionContainer>
      {pageContext === 'projectOne' && (
        <StyledImageContainer fluid={data.imageOne.childImageSharp.fluid} />
      )}
      {pageContext === 'projectTwo' && (
        <StyledImageContainer fluid={data.imageTwo.childImageSharp.fluid} />
      )}
      {pageContext === 'projectThree' && (
        <StyledImageContainer fluid={data.imageThree.childImageSharp.fluid} />
      )}
      <StyledDescriptionContainer>
        <StyledDescriptionLeft>
          <h2>
            technologies<span>.</span>
          </h2>
          <ul>
            {pageContext === 'projectOne' &&
              projects[0].technologies.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            {pageContext === 'projectTwo' &&
              projects[1].technologies.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            {pageContext === 'projectThree' &&
              projects[2].technologies.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </StyledDescriptionLeft>
        <StyledLinksContainer>
          {pageContext === 'projectOne' && (
            <>
              <StyledLink
                href={projects[0].projectUrl}
                target="blank"
                bcgImg={linkIcon}
              />
              <StyledLink
                href={projects[0].githubUrl}
                target="blank"
                bcgImg={githubIcon}
              />
            </>
          )}
          {pageContext === 'projectTwo' && (
            <>
              <StyledLink
                href={projects[1].projectUrl}
                target="blank"
                bcgImg={linkIcon}
              />
              <StyledLink
                href={projects[1].githubUrl}
                target="blank"
                bcgImg={githubIcon}
              />
            </>
          )}
          {pageContext === 'projectThree' && (
            <>
              <StyledLink
                href={projects[2].projectUrl}
                target="blank"
                bcgImg={linkIcon}
              />
              <StyledLink
                href={projects[2].githubUrl}
                target="blank"
                bcgImg={githubIcon}
              />
            </>
          )}
        </StyledLinksContainer>
      </StyledDescriptionContainer>
      {pageContext === 'projectOne' && (
        <StyledBottomNav>
          <AniLink
            cover
            direction="left"
            to={projects[0].nextLink}
            bg="#ff7500"
          >
            <StyledButtonNext>
              <h4>next</h4>
              <img src={arrowIcon} />
            </StyledButtonNext>
          </AniLink>
        </StyledBottomNav>
      )}

      {pageContext === 'projectTwo' && (
        <StyledBottomNav>
          <AniLink
            cover
            direction="right"
            to={projects[1].prevLink}
            bg="#ff7500"
          >
            <StyledButtonPrev>
              <img src={arrowIcon} />
              <h4>prev</h4>
            </StyledButtonPrev>
          </AniLink>
          <AniLink
            cover
            direction="left"
            to={projects[1].nextLink}
            bg="#ff7500"
          >
            <StyledButtonNext>
              <h4>next</h4>
              <img src={arrowIcon} />
            </StyledButtonNext>
          </AniLink>
        </StyledBottomNav>
      )}
      {pageContext === 'projectThree' && (
        <StyledBottomNav>
          <AniLink
            cover
            direction="right"
            to={projects[2].prevLink}
            bg="#ff7500"
          >
            <StyledButtonPrev>
              <img src={arrowIcon} />
              <h4>prev</h4>
            </StyledButtonPrev>
          </AniLink>
        </StyledBottomNav>
      )}
      <Footer />
    </StyledContainer>
  )
}

export default Project

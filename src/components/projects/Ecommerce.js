import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const StyledBcgImage = styled(BackgroundImage)`
  height: 100vh;
`

const Ecommerce = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "imageone.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <StyledBcgImage fluid={data.file.childImageSharp.fluid} />
}

export default Ecommerce

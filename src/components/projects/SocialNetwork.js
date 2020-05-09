import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const StyledBackgroundImage = styled(Img)`
  height: 100%;
`

const Ecommerce = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "imagetwo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <StyledBackgroundImage fluid={data.file.childImageSharp.fluid} />
}

export default Ecommerce

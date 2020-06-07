import React from 'react'
import Navbar from '../../components/Navbar'
import MainLayout from '../../components/MainLayout'
import mailLight from '../../images/mail-icon-light.svg'
import Blob from '../../components/atoms/Blob'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Project from '../../components/Project'
import SEO from '../../components/seo'

const PhotoghraphyPage = () => {
  return (
    <MainLayout>
      <SEO title="Portfolio | Michael Mikucki" />
      <Navbar navColor={true}>
        <AniLink cover direction="up" bg="#ff7500" duration={0.6} to="/contact">
          <Blob
            blobBcg="#ff7500"
            size="100px"
            icon={mailLight}
            iconSize="45px"
          />
        </AniLink>
      </Navbar>
      <Project title="port folio" pageContext="projectThree" />
    </MainLayout>
  )
}

export default PhotoghraphyPage

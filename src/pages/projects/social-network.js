import React from 'react'
import Navbar from '../../components/Navbar'
import MainLayout from '../../components/MainLayout'
import mailLight from '../../images/mail-icon-light.svg'
import Blob from '../../components/atoms/Blob'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Project from '../../components/Project'
import SEO from '../../components/seo'

const SocialNetworkPage = () => {
  return (
    <MainLayout>
      <SEO title="Social Network | Michael Mikucki" />
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
      <Project title="social net work" pageContext="projectTwo" />
    </MainLayout>
  )
}

export default SocialNetworkPage

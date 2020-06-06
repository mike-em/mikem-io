import React from 'react'
import MainLayout from '../components/MainLayout'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Blob from '../components/atoms/Blob'
import mailPrimary from '../images/mail-icon-primary.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logoLight from '../images/mm-logo-light.svg'
import SEO from '../components/seo'

const IndexPage = () => (
  <MainLayout>
    <SEO title="Michael Mikucki" />
    <Navbar title="my projects" logo={logoLight}>
      <AniLink cover direction="up" bg="#ff7500" duration={0.6} to="/contact">
        <Blob size="100px" icon={mailPrimary} iconSize="45px" />
      </AniLink>
    </Navbar>
    <Projects />
  </MainLayout>
)

export default IndexPage

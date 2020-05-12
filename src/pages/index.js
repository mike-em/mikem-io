import React from 'react'
import Loading from '../components/Loading'
import MainLayout from '../components/MainLayout'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Blob from '../components/atoms/Blob'
import mailPrimary from '../images/mail-icon-primary.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const IndexPage = () => (
  <MainLayout>
    <Navbar title="my projects">
      <AniLink cover direction="up" bg="#ff7500" duration={0.6} to="/contact">
        <Blob size="100px" icon={mailPrimary} iconSize="45px" />
      </AniLink>
    </Navbar>
    {/* <Loading /> */}
    <Projects />
  </MainLayout>
)

export default IndexPage

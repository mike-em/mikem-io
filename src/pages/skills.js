import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import MainLayout from '../components/MainLayout'
import mailLight from '../images/mail-icon-light.svg'
import Blob from '../components/atoms/Blob'
import Skills from '../components/Skills'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const SkillsPage = () => {
  return (
    <MainLayout>
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
      <Skills />
    </MainLayout>
  )
}

export default SkillsPage

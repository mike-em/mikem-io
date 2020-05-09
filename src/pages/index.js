import React from 'react'
import Loading from '../components/Loading'
import MainLayout from '../components/MainLayout'
import Nav from '../components/Nav'
import Projects from '../components/Projects'

const IndexPage = () => (
  <MainLayout>
    <Nav title="my projects" />
    <Loading />
    <Projects />
  </MainLayout>
)

export default IndexPage

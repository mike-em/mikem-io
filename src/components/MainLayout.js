import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'
import SEO from './seo'

import './layout.css'

const MainLayout = ({ children }) => {
  return (
    <>
      <SEO lang="en" />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

export default MainLayout

import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

import './layout.css'

const MainLayout = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MainLayout

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

import './layout.css'

const MainLayout = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MainLayout

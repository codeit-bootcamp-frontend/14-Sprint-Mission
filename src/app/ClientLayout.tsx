'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import GlobalStyles from '../../styles/GlobalStyles'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

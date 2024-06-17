'use client'

import React from 'react'
import { ThemeProvider } from '@wits/next-themes'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      {children}
    </ThemeProvider>
  )
}

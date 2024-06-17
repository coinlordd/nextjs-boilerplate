import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { ServerThemeProvider } from '@wits/next-themes'

import Providers from '@/components/providers'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { AppConfig } from '@/app-config'
import '../styles/global.css'

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    url: AppConfig.url,
    locale: AppConfig.locale,
    siteName: AppConfig.site_name,
  },
}

const DMSans = DM_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ServerThemeProvider attribute='class'>
      <html lang={AppConfig.locale} className={DMSans.variable}>
        <body>
          <Providers>
            <Nav />
            {/* 136px = header 64 + footer 64 + footer upperpadding 8 */}
            <main className='absolute top-16 w-full h-[calc(100%-136px)] overflow-y-scroll'>
              <div className='flex relative w-full px-auto z-0'>{children}</div>
            </main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}

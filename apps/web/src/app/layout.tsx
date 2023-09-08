import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import '@/styles/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  viewport: 'width=device-width, minimum-scale=1',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={cn('h-full flex', inter.className)}>
        <main className='flex flex-col w-full gap-2 p-2 m-auto dark:text-white max-w-7xl'>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <Navbar />
            <main className='flex flex-col w-full h-full gap-2 dark:text-white'>{children}</main>
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}

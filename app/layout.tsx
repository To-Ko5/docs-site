import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/original/header'
import Footer from '@/components/original/footer'
import { ThemeProvider } from '@/context/theme-provider'
import { site } from '@/data/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: site.title,
  description: site.description
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

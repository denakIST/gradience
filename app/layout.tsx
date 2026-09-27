import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gradience',
  description: 'Gradience — decision intelligence for consequential choices.',
}

export const viewport: Viewport = {
  themeColor: '#f5f4f0',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={`${manrope.variable} bg-background`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

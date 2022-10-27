import React from 'react'
import { Inter } from '@next/font/google'
import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <title>Prost!</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="description"
          content="Next.js starter with TypeScript, Tailwind CSS, Framer Motion, and Splitbee"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

import './globals.css'
import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="" />
        <link rel="icon" href="/img/favicon.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

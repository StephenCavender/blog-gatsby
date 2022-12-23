import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="prose prose-sm mx-auto px-2 sm:prose sm:px-4">
        {children}
      </main>
      <Footer />
    </>
  )
}

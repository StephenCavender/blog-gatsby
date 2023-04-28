import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children }) => {
  return (
    <div className="min-w-full bg-bg text-text">
      <Header />
      <main className="mx-auto min-h-screen max-w-2xl px-2 sm:px-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}

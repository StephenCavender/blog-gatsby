import React from 'react'
import { Layout } from './layout'

export const RootWrapper = ({ children }) => {
  return (
    <Layout>{children}</Layout>
    // <main className="prose prose-sm mx-auto px-2 sm:prose sm:px-4">
    //   {children}
    // </main>
  )
}

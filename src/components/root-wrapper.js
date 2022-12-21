import React from 'react'

export const RootWrapper = ({ children }) => {
  return (
    <main className="prose prose-sm mx-auto px-2 sm:prose sm:px-4">
      {children}
    </main>
  )
}

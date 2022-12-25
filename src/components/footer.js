import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-4 bg-surface py-6 text-center shadow-inner">
      © {year} Stephen Cavender
    </footer>
  )
}

import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-outline mt-4 border-t py-6 text-center">
      © {year} Stephen Cavender
    </footer>
  )
}

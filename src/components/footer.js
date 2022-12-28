import React from 'react'
import Ichthys from '../svg/ichthys.svg'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-4 flex items-center justify-center bg-surface py-6 shadow-inner">
      © {year} Stephen Cavender <Ichthys alt="ichthys" className="w-12" />
    </footer>
  )
}

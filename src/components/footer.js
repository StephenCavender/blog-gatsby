import React from 'react'
import Ichthys from '../svg/ichthys.svg'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface py-3 text-sm shadow-inner">
      <div className="flex items-center justify-center gap-2">
        <div>© {year}</div>
          Stephen Cavender
        <Ichthys alt="ichthys" className="w-8" />
      </div>
      <div className="flex justify-center">Made in the USA</div>
    </footer>
  )
}

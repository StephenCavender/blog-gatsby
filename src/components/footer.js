import React from 'react'
import Ichthys from '../svg/ichthys.svg'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { A } from './link'

export const Footer = () => {
  const year = new Date().getFullYear()
  const { biolinkUrl } = useSiteMetadata()

  return (
    <footer className="bg-surface py-3 text-sm shadow-inner">
      <div className="flex items-center justify-center gap-2">
        <div>© {year}</div>
        <A href={biolinkUrl} className="!no-underline">
          Stephen Cavender
        </A>
        <Ichthys alt="ichthys" className="w-8" />
      </div>
      {/* Made in USA */}
      <div className="flex justify-center">Made In USA</div>
    </footer>
  )
}

import React from 'react'
import Ichthys from '../svg/ichthys.svg'
import UsFlag from '../svg/us-flag.svg'
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
      <div className="flex items-center justify-center gap-2">
        <UsFlag alt="Made in the USA" className="w-8" />
        Made in the USA
      </div>
    </footer>
  )
}

import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Card = ({ link, title, thumbnail, date, dateModified, excerpt }) => {
  return (
    <article className="rounded bg-surface shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-accent/30">
      <Link to={link} className="block p-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="h-[120px] w-[180px] shrink-0 overflow-hidden rounded shadow-lg">
            <GatsbyImage alt={title} image={getImage(thumbnail)} />
          </div>
          <div>
            <time className="font-semibold text-accent">
              {dateModified ? dateModified : date}
            </time>
            <h3 className="!mt-0 text-xl">{title}</h3>
            <p className="text-base text-muted">{excerpt}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Card

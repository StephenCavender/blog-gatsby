import React from 'react'
import Calendar from '../svg/calendar.svg'

export const Hero = ({ image, title, date, creator }) => {
  return (
    <div
      className="relative h-[220px] rounded-md bg-cover bg-center bg-no-repeat p-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
    >
      <h1 className="mb-6 text-2xl font-extrabold">{title}</h1>
      {date && (
        <div className="flex items-center text-sm">
          <Calendar height="0.875rem" />
          <time>{date}</time>
        </div>
      )}
      {creator && (
        <a className="!text-white" href={creator.url}>
          <span className="absolute bottom-0 right-0 my-0 mx-auto rounded-tl-md bg-black py-1 px-1.5 text-xs opacity-50 transition-all duration-300 hover:opacity-60">
            Image by {creator.name}
          </span>
        </a>
      )}
    </div>
  )
}

import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const defaultStyles =
  'text-primary underline decoration-2 underline-offset-[5px] transition-all duration-300 hover:text-hover font-medium'

// TODO: concatenate default styles with any passed in styles
export const A = (props) => (
  <a {...props} className={`${defaultStyles} ${props.className}`}>
    {props.children}
  </a>
)

export const Link = (props) => (
  <GatsbyLink {...props} className={`${defaultStyles} ${props.className}`}>
    {props.children}
  </GatsbyLink>
)

import * as React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Link className="color-black" to="/posts/post-one/">Post one</Link>
  )
}

export default IndexPage

export const Head = () => <title>Home Page2</title>

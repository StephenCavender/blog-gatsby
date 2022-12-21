import * as React from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components/seo'
import Bio from '../images/bio.jpg'

const Index = () => {
  return (
    <div className="mb-8">
      <img alt="bio" src={Bio} className="float-right w-[180px] rounded-full" />
      <h2 className="mb-6 text-4xl">Hi</h2>
      <p className="my-2">My name is Steve.</p>
      <p className="my-2">
        I'm a software engineer at <Link to="https://tele.vet">Televet</Link>.
      </p>
      <p className="my-2">
        I enjoy coding, guitar, crossfit, video games, whiskey, and{' '}
        <Link to="https://strenuouslife.co">doing hard things</Link>.
      </p>
    </div>
  )
}

export default Index

export const Head = () => <SEO />

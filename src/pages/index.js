import * as React from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components/seo'
import Bio from '../images/bio.jpg'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import GitHub from '../svg/github.svg'
import Dev from '../svg/devdotto.svg'
import LinkedIn from '../svg/linkedin.svg'

const Index = ({ data }) => {
  const { githubUrl, devUrl, linkedInUrl } = useSiteMetadata()

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
      <div className="mt-12 flex justify-around">
        <a href={githubUrl}>
          <GitHub alt="github link" className="w-12 fill-current " />
        </a>
        <a href={devUrl}>
          <Dev alt="dev to link" className="w-12 fill-current" />
        </a>
        <a href={linkedInUrl}>
          <LinkedIn alt="linked in link" className="w-12 fill-current" />
        </a>
      </div>
    </div>
  )
}

export default Index

export const Head = () => <SEO />

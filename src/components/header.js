import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/icon.webp'

export const Header = () => {
  return (
    <header className="mb-6 bg-surface shadow-lg">
      <div className="mx-auto max-w-2xl">
        <div className="mx-6 flex justify-between">
          <Link className="flex gap-1 text-lg" to="/">
            <img alt="logo" src={Logo} className="w-12 object-contain" />
            <span className="py-5">Stephen Cavender</span>
          </Link>
          <nav className="flex gap-6 py-5">
            <Link
              className="border-b-[3px] border-transparent text-lg"
              to="/posts"
            >
              Posts
            </Link>
            <Link
              className="border-b-[3px] border-transparent text-lg"
              to="/projects"
            >
              Projects
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

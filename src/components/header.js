import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/icon.webp'

export const Header = () => {
  return (
    <header className="border-outline mb-6 border-b">
      <div className="mx-auto max-w-2xl">
        <div className="mx-6 flex justify-between">
          <Link className="flex gap-1 text-lg" to="/">
            <img alt="logo" src={Logo} className="w-12 object-contain" />
            <h1 className="py-5">Stephen Cavender</h1>
          </Link>
          <nav className="flex gap-6 py-5">
            <Link className="text-lg" to="/posts">
              Posts
            </Link>
            <Link className="text-lg" to="/projects">
              Projects
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

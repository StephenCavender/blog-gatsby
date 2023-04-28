import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/icon.png'

const NavLink = ({ to, children }) => {
  return (
    <Link
      className="border-b-[3px] border-transparent text-lg font-medium transition-all duration-300 hover:border-b-hover hover:text-hover"
      to={to}
    >
      {children}
    </Link>
  )
}

export const Header = () => {
  return (
    <header className="mb-6 bg-surface shadow-lg">
      <div className="mx-auto max-w-2xl">
        <div className="mx-6 flex justify-between">
          <Link className="flex gap-1 text-lg" to="/">
            <img alt="logo" src={Logo} className="w-12 object-contain" />
            <span className="hidden py-5 font-medium transition-all duration-200 hover:text-hover sm:block">
              Stephen Cavender
            </span>
          </Link>
          <nav className="flex gap-6 py-5">
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

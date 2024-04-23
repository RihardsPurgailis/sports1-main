import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="w-full border-b mb-3">
      <div className="flex items-center justify-between">
        <Link href="/" className="w-36 ml-3">
          Logo
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            Categories
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3 mr-3 mt-3 mb-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
          <SignedOut>
            <button className="inline-block px-6 py-3 bg-white text-black font-bold text-lg rounded-md border border-gray-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-150 ease-in-out mr-2 mt-2 mb-2">
              <Link href="/sign-in">
                Login
              </Link>
            </button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header

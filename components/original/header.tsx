'use client'
import ThemeButton from '@/components/original/theme-button'
import { site } from '@/data/data'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="mt-5 mb-4">
      <div className="container max-w-4xl flex justify-between">
        <div className="flex items-center">
          <div>
            <Link href="/">{site.title}</Link>
          </div>
        </div>

        <ThemeButton />
      </div>
    </header>
  )
}

export default Header

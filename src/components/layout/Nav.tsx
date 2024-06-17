'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import logo from '@/assets/images/logo-image.png'
import ThemeSwitch from '../theme'

const links = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/about',
    name: 'About',
  },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className='fixed w-full top-0 left-0 z-0 h-16 border-b border-primary bg-primary'>
      <div className='body-container row-between py-3'>
        <Link href='/' className='row-start !w-fit text-xl font-extrabold text-[#22204A] dark:text-white'>
          <div className='relative w-8 h-8'>
            <Image src={logo} alt='logo' fill sizes='32px' className='object-fill cursor-pointer' />
          </div>
        </Link>
        <nav className='hidden md:flex ml-2'>
          <ul className='row-center list-none [&>li]:flex [&>li]:h-full hidden'>
            {links.map((link, i) => (
              <li key={i} className='h-full w-full'>
                <Link
                  href={link.href}
                  className={`text-black dark:text-white font-bold dark:font-normal rounded-xl px-3 py-2 ${
                    pathname == link.href ? 'bg-primary' : 'text-opacity-50 hover-bg-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='row-end ml-auto h-10'>
          <ThemeSwitch className='hidden md:flex' />
        </div>
      </div>
    </header>
  )
}

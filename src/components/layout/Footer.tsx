'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import logo from '@/assets/images/logo-image.png'
import { AppConfig } from '@/app-config'
import { useOnClickOutside } from '@/hooks/useOnOutsideClick'

import { ArrowRight } from '@/components/icons/ArrowRight'
import { Docs } from '@/components/icons/Docs'
import { Telegram } from '@/components/icons/Telegram'
import { Discord } from '@/components/icons/Discord'
import { Twitter } from '@/components/icons/Twitter'
import ThemeSwitch from '@/components/theme'

const links = [
  {
    href: '/',
    name: 'Home',
    pill: true,
  },
  {
    href: '/about',
    name: 'About',
    pill: true,
  },
]

const socials = [
  {
    icon: <Docs className='w-5' />,
    href: '#',
  },
  {
    icon: <Telegram className='w-5' />,
    href: '#',
  },
  {
    icon: <Discord className='w-5' />,
    href: '#',
  },
  {
    icon: <Twitter className='w-5' />,
    href: '#',
  },
]

export default function Footer() {
  const pathname = usePathname()
  const [active, setActive] = useState(false)

  const toggleMenu = () => setActive(prev => !prev)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setActive(false))

  return (
    <footer className='fixed w-full pb-2 px-2 bottom-0 left-0 h-16 md:border-t border-primary md:py-3 md:px-0'>
      {/* Bottom Footer that's stuck below every page */}
      <div className='body-container h-full hidden md:block'>
        <div className='row-between h-full'>
          <div className='row-start'>
            <div className='relative w-8 h-8'>
              <Image src={logo} alt='logo' fill sizes='32px' className='object-fill' />
            </div>
            <p className='text-xxs text-gray-400 font-medium m-0'>
              © {new Date().getFullYear()} {AppConfig.site_name} - All rights reserved.
            </p>
          </div>
          {/* Socials */}
          <div className='flex gap-6 items-center'>
            {socials.map((social, i) => (
              <Link key={i} href={social.href} className='inline-block transition-all hover:opacity-90' target='_blank'>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Navigation Pill */}
      <div className='block overflow-hidden h-full md:hidden bg-primary rounded-full border border-primary'>
        <ul className='row-between h-full p-1'>
          {links
            .filter(l => l.pill)
            .map((link, i) => (
              <li key={i} className='h-full w-full'>
                <Link
                  href={link.href}
                  className={`row-center flex-1 h-full rounded-full hover-bg-tertiary hover:cursor-pointer ${
                    pathname == link.href ? 'font-semibold bg-tertiary border border-secondary dark:border-primary' : 'text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          {/* Side Navigation Toggle within Pill */}
          <li
            className='row-center !w-fit h-full px-5 bg-secondary hover-bg-tertiary rounded-full hover:cursor-pointer border border-secondary dark:border-primary'
            onClick={toggleMenu}
          >
            <div className='w-6 h-5 relative cursor-pointer'>
              <div className='w-full h-[2px] rounded-sm bg-black dark:bg-white absolute top-0 left-0' />
              <div className='w-11/12 h-[2px] rounded-sm bg-black dark:bg-white absolute top-1/2 -translate-y-1/2 right-0' />
              <div className='w-full h-[2px] rounded-sm bg-black dark:bg-white absolute bottom-0 left-0' />
            </div>
          </li>
        </ul>
      </div>
      {/* Side Navigation */}
      <div ref={ref}>
        {/* Side Navigation Hover Arrows */}
        <div className='group'>
          <ArrowRight
            className={`fixed top-7 right-1/2 md:right-1/3 w-8 mr-6 group-hover:translate-x-2 transition-all duration-500 ${
              active ? 'opacity-50' : 'opacity-0 pointer-events-none'
            }`}
          />
          <div
            className={`fixed top-2 right-1/2 bottom-2 md:right-1/3 w-20 rounded-l-xl hover:bg-gray-400 hover:bg-opacity-5 hover:cursor-pointer group-hover:translate-x-2 transition-all duration-500 ${
              active ? 'translate-x-0 opacity-100' : 'hidden translate-x-full opacity-0'
            }`}
            onClick={toggleMenu}
          />
        </div>
        {/* Side Navigation Items */}
        <div
          className={`fixed top-2 right-2 bottom-2 w-1/2 md:w-1/3 pt-6 px-5 bg-primary border border-primary rounded-xl transition-all duration-500 overflow-y-scroll ${
            active ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <ul className='flex flex-col gap-2 mb-10 w-full'>
            <li className='row-between !gap-3'>
              <div className='w-full h-0 border-b border-secondary' />
              <h1 className='text-lg font-semibold'>Pages</h1>
              <div className='w-full h-0 border-b border-secondary' />
            </li>
            {links.map((link, i) => (
              <li key={i} className='w-full h-full'>
                <Link
                  className={`btn-secondary w-full hover:cursor-pointer ${pathname == link.href ? 'btn-active' : null}`}
                  href={link.href}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className='row-between !gap-3'>
              <div className='w-full h-0 border-b border-secondary' />
              <h1 className='text-lg font-semibold'>Settings</h1>
              <div className='w-full h-0 border-b border-secondary' />
            </li>
            <li className='w-fit'>
              <ThemeSwitch />
            </li>
            <div className='row-between !gap-3 mt-6'>
              <div className='w-full h-0 border-b border-secondary' />
              <h1 className='text-lg font-semibold'>Socials</h1>
              <div className='w-full h-0 border-b border-secondary' />
            </div>
            {/* Socials */}
            <div className='flex flex-row justify-between my-3 gap-6 items-center'>
              {socials.map((social, i) => (
                <Link key={i} href={social.href} className='inline-block transition-all hover:opacity-90' target='_blank'>
                  {social.icon}
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </footer>
  )
}

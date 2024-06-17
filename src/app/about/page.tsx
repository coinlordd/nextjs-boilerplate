import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About page of the app',
}

export default function About() {
  return <div className='body-container block mt-10'>About</div>
}

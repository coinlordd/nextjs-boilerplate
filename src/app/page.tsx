import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of the app',
}

export default function Home() {
  return <div className='body-container block mt-10'>Home</div>
}

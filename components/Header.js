import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <h2>Motion</h2>
      <ul>
        <Link href='/shared-layouts/layout-1'>Shared-layout Anim</Link>
        <Link href='/'>Gallery</Link>
        <Link href='/dots'>Iphone</Link>
        <Link href='/scroll'>Scroll</Link>
      </ul>

      <div className='avatar'>
        <Image src='/images/profile-2.jpg' layout='fill' alt='profile-img' />
      </div>
    </header>
  )
}

export default Header

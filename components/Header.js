import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <h2>Motion</h2>
      <ul>
        <Link href='/'>Gallery</Link>
        <Link href='/dots'>Iphone</Link>
      </ul>

      <div className='avatar'>
        <Image src='/images/profile-2.jpg' layout='fill' />
      </div>
    </header>
  )
}

export default Header

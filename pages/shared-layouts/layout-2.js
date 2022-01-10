import { motion } from 'framer-motion'
import Link from 'next/link'

const Layout2 = () => {
  return (
    <aside className='aside'>
      <Link href='/shared-layouts/layout-1' passHref>
        <motion.div
          layoutId='layout'
          transition={{ duration: 1 }}
          className='napa-2'
        >
          <motion.img
            layoutId='image'
            transition={{ duration: 1 }}
            src='/images/napa_automotive1.svg'
            alt=''
          />
        </motion.div>
      </Link>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '40%', transition: { delay: 0.8, duration: 1 } }}
        exit={{ width: 0, transition: { duration: 0.5 } }}
        className='progress'
      />
    </aside>
  )
}

export default Layout2

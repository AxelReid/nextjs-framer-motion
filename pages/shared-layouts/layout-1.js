import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Layout1 = () => {
  return (
    <aside className='aside'>
      <motion.div
        layoutId='layout'
        transition={{ duration: 1 }}
        className='napa-1'
      >
        <motion.img
          layoutId='image'
          transition={{ duration: 1 }}
          src='/images/napa_automotive1.svg'
          alt=''
        />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.7, duration: 0.5 },
        }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='form'
      >
        <Link href='/shared-layouts/layout-2' passHref>
          <button>Continue</button>
        </Link>
      </motion.div>
    </aside>
  )
}

export default Layout1

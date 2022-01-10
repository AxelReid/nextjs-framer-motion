import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Header from '../components/Header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  return (
    <main>
      <Header />
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </main>
  )
}

export default MyApp

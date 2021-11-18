import Item from './Item'
import { data } from './data'
import { useEffect, useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

const List = () => {
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    document.body.style.overflowY = selected ? 'hidden' : 'scroll'
    document.body.style.paddingRight = selected ? '10px' : '0'
  }, [selected])
  return (
    <AnimateSharedLayout type='crossfade'>
      <div className='list'>
        {data.map((d) => (
          <Item
            key={d.id}
            setSelected={setSelected}
            isExpanded={false}
            {...d}
          />
        ))}
        <AnimatePresence>
          {selected && (
            <>
              <motion.div
                className='dark-back'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              ></motion.div>
              <section className='selected' onClick={() => setSelected(null)}>
                <Item
                  key={selected.id}
                  {...selected}
                  setSelected={setSelected}
                  isExpanded={true}
                />
              </section>
            </>
          )}
        </AnimatePresence>
      </div>
    </AnimateSharedLayout>
  )
}

export default List

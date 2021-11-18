import React, { useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

const Dots = () => {
  const alldots = [
    {
      id: 1,
      spans: [
        'red',
        'blue',
        'yellow',
        'lightgreen',
        '#0099ff',
        'orange',
        'green',
        'purple',
        'orangered',
      ],
    },
    {
      id: 2,
      spans: ['red', 'blue', 'yellow', 'green', '#0099ff'],
    },
    {
      id: 3,
      spans: [
        'yellow',
        'green',
        '#0099ff',
        'orange',
        'lightgreen',
        'purple',
        'orangered',
      ],
    },
    {
      id: 4,
      spans: [
        'red',
        'blue',
        'yellow',
        'green',
        '#0099ff',
        'orange',
        'lightgreen',
      ],
    },
    {
      id: 5,
      spans: ['red', 'orange', 'green', 'purple', 'orangered'],
    },
    {
      id: 6,
      spans: [
        'red',
        'blue',
        'yellow',
        'orange',
        'green',
        'purple',
        'orangered',
      ],
    },
    {
      id: 7,
      spans: ['orange', 'yellow', 'skyblue'],
    },
  ]
  const [selected, setSelected] = useState(null)
  return (
    <AnimateSharedLayout>
      <div
        className='phone'
        onClick={() => {
          if (!selected) return
          setSelected(null)
        }}
      >
        <AnimatePresence>
          {selected && (
            <motion.aside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.1 } }}
            ></motion.aside>
          )}
        </AnimatePresence>
        <section className={selected ? 'hide' : ''}>
          {alldots.map((dots) => (
            <Dot key={dots.id} {...dots} setSelected={setSelected} />
          ))}
        </section>
        <AnimatePresence>
          {selected && <Dot {...selected} expanded={true} />}
        </AnimatePresence>
      </div>
    </AnimateSharedLayout>
  )
}
const Dot = ({ id, spans, expanded, setSelected }) => {
  return (
    <div
      className={`dot ${expanded ? 'expended' : ''}`}
      onClick={() => !expanded && setSelected({ id, spans })}
    >
      {spans.map((span) => (
        <motion.span
          layoutId={id + span}
          key={span}
          style={{ backgroundColor: span }}
        ></motion.span>
      ))}
    </div>
  )
}
export default Dots

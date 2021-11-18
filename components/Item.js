import { motion } from 'framer-motion'
import Image from 'next/image'

const Item = ({ isExpanded, setSelected, id, title, type, img }) => {
  return (
    <motion.div
      layoutId={id}
      className='item'
      onClick={() => setSelected(isExpanded ? null : { id, title, type, img })}
    >
      <motion.div layoutId={id + 'img'} className='img-container'>
        <div className='title-container'>
          <motion.p layoutId={id + 'type'}>{type}</motion.p>
          {!isExpanded && (
            <motion.h1 layoutId={id + 'title'}>{title}</motion.h1>
          )}
        </div>
        <motion.div layoutId={id + 'image'} className='img-box'>
          <Image src={img} layout='fixed' alt='image' />
        </motion.div>
      </motion.div>

      {isExpanded && (
        <div className='content'>
          <motion.h1 layoutId={id + 'title'}>{title}</motion.h1>
          <motion.p
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            className='secondary'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            natus, perferendis quae facilis eum neque, reiciendis nulla dolorum
            inventore iste soluta. Perspiciatis, eligendi nulla, iste deserunt
            esse accusamus quod architecto fuga doloremque excepturi ipsa
            distinctio?
          </motion.p>
        </div>
      )}
    </motion.div>
  )
}

export default Item

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Avatar({ src, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className='inline-flex relative overflow-hidden rounded-full'
      {...props}
    >
      <Image
        priority
        src={src}
        alt="sweetjohn avatar"
        width={128}
        height={128}
      />
    </motion.div>
  );
}

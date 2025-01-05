import { motion } from 'framer-motion';

const Header = ({ onContinue }) => {
    return (
        <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="flex flex-col items-center justify-center text-center p-8 h-screen aa:w-full ab:w-full bb:w-full bc:w-full cc:w-full cd:w-full dd:w-full de:w-full"
>
  <h1 className="text-6xl aa:text-5xl ab:text-5xl bb:text-5xl bc:text-5xl cc:text-6xl cd:text-7xl de:text-7xl font-raleway text-beige">
    <span className="relative inline-block">
      memoire
    </span>
    <motion.span
      className="relative inline-block"
      style={{
        transformOrigin: 'center 58%',
      }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      x
    </motion.span>
  </h1>
  <p className="text-lg aa:text-base ab:text-base bb:text-base bc:text-lg cc:text-xl cd:text-xl de:text-2xl mt-4 text-light font-spaceMono">
    Get detailed-notes for important topics in seconds.
  </p>
  <button
    onClick={onContinue}
    className="mt-6 bg-beige text-dark px-4 py-2 rounded-md text-2xl aa:text-xl ab:text-2xl bb:text-3xl font-medium transition-transform duration-300 hover:scale-105"
  >
    continue
  </button>
</motion.div>
    );
};

export default Header;

import { motion } from 'framer-motion';

const Header = ({ onContinue }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center p-8 h-screen"
        >
            <h1 className="text-6xl md:text-[6.7rem] font-raleway text-beige">
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
            <p className="text-lg mt-4 text-light font-spaceMono">
                Get detailed-notes for important topics in seconds.
            </p>
            <button
                onClick={onContinue}
                className="mt-6 bg-beige text-dark px-4 py-2 rounded-md text-3xl font-medium transition-transform duration-300 hover:scale-105"
            >
                continue
            </button>
        </motion.div>
    );
};

export default Header;

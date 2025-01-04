import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-center p-4 bg-neutral-950 text-beige border-b border-violet-200 w-full z-30"
        >
        <motion.h1
            className="text-2xl font-raleway lg:text-3xl"
            animate={{
                scale: [1, 1.02, 1],
                opacity: [0.9, 1, 0.9],
                rotate: [0, 0, 0],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
            }}
        >
        memoirex
        </motion.h1>
      
        <div className="flex space-x-4">
        <Link href="https://github.com/arindal1/memoirex-AI" passHref>
            <Image
                src="/images/github.png"
                alt="GitHub"
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80"
            />
        </Link>
        <Link href="https://linkedin.com/in/arindalchar" passHref>
            <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80"
            />
            </Link>
        </div>
        </motion.nav>
    );
};

export default Navbar;

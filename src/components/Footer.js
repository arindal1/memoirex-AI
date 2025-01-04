import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed bottom-0 w-full text-center p-4 bg-neutral-950 text-beige font-spaceMono border-t border-lavender z-30"
        >
        <p className="text-sm sm:text-base">
            AI powered instant notes, one topic at a time. Quick notes, no cap. Made by <a href="https://github.com/arindal1" className="underline text-light">@arindal1</a>
        </p>
        </motion.footer>
    );
};

export default Footer;

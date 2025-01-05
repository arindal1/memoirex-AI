import { motion } from 'framer-motion';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const NotesDisplay = ({ notes, onRegenerate }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(notes);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="mt-8 mb-24 p-4 bg-neutral-950 text-beige rounded-md w-full max-w-full ssm:max-w-full"
>
<div className="markdown-content font-medium text-lg sm:text-base md:text-lg space-y-6">
  <ReactMarkdown children={notes} remarkPlugins={[remarkGfm]} />
</div>


  <div className="flex justify-between mt-4 items-center">
    <button
      onClick={copyToClipboard}
      className="bg-beige text-dark px-4 py-2 rounded-md font-medium text-lg aa:text-sm ab:text-base bb:text-lg bc:text-lg cc:text-xl cd:text-2xl de:text-2xl transition-transform duration-300 hover:scale-105"
    >
      Copy
    </button>
    {copied && (
      <motion.span
        className="ml-2 text-light font-medium text-lg aa:text-sm ab:text-base bb:text-lg bc:text-lg cc:text-xl cd:text-2xl de:text-2xl"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        Copied!
      </motion.span>
    )}
    <button
      onClick={onRegenerate}
      className="bg-beige text-dark px-4 py-2 rounded-md font-medium text-lg aa:text-sm ab:text-base bb:text-lg bc:text-lg cc:text-xl cd:text-2xl de:text-2xl transition-transform duration-300 hover:scale-105"
    >
      Regenerate
    </button>
  </div>
</motion.div>

    );
};

export default NotesDisplay;

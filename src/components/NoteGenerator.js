import { motion } from 'framer-motion';

const NoteGenerator = ({ onGenerate, setTopic }) => {
    return (
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center flex-col items-center mt-8 min-h-screen px-4 aa:px-2 ab:px-4 bb:px-6 bc:px-8 cc:px-10 de:px-12"
>
<textarea
  onChange={(e) => setTopic(e.target.value)}
  placeholder="Enter your topic..."
  className="p-4 w-full md:w-[600px] h-64 border border-light bg-neutral-950 text-light rounded-2xl text-2xl sm:text-3xl focus:outline-none focus:ring focus:ring-beige scrollbar-thin scrollbar-thumb-beige scrollbar-track-neutral-800"
  style={{ maxWidth: '100%' }}
/>
  <button
    onClick={onGenerate}
    className="mt-6 bg-beige text-dark px-4 py-2 rounded-md text-2xl aa:text-xl ab:text-2xl bb:text-3xl font-medium transition-transform duration-300 hover:scale-105"
  >
    Generate Notes
  </button>
</motion.div>

    );
};

export default NoteGenerator;

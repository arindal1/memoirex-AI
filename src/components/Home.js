import { useState, useEffect } from 'react';
import Header from './Header';
import NoteGenerator from './NoteGenerator';
import NotesDisplay from './NotesDisplay';

const Home = () => {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState('');

  const handleGenerateNotes = async () => {
    if (!topic.trim()) {
      alert('Please enter a topic');
      return;
    }

    setLoading(true);

    const response = await fetch('/api/generate-notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic }),
    });

    const data = await response.json();
    setLoading(false);

    if (response.ok) {
      setNotes(data.notes);
      setStep(3);
    } else {
      alert(data.error || 'Failed to generate notes');
    }
  };

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setDots((prev) => {
          if (prev === '...') return '.';
          return prev + '.';
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <div>
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 z-20">
          <p className="text-3xl text-beige font-spaceMono">
            cooking notes{dots}
          </p>
        </div>
      )}

<div className="flex flex-col items-center min-h-screen min-w-fit bg-dark text-offwhite relative px-4 sm:px-8">
        {step === 1 && <Header onContinue={() => setStep(2)} />}
        {step === 2 && (
          <NoteGenerator
            setTopic={setTopic}
            onGenerate={handleGenerateNotes}
          />
        )}
        {step === 3 && (
          <NotesDisplay
            notes={notes}
            onRegenerate={() => setStep(2)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;

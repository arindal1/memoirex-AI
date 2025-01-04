import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { topic } = req.body;

        try {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
                    { contents: [{ parts: [{
        text: `I have an exam tomorrow on: "${topic}". Can you make detailed notes for me on this topic? Below are the specific subtopics I need covered:
Provide definitions where necessary for each subtopic.
Explain all concepts elaborately and in depth. Make sure I can understand everything fully.
For broader topics, split them up into smaller, digestible sections, each with an explanation of the concept followed by key points to help with memorization.
Include examples, use cases, codes, formulas, and numerical problems wherever applicable to aid my understanding.
Highlight keywords and important phrases so they stand out clearly.
Maintain a neat, organized, and professional style throughout the notes.
Make the notes easy to read and understand with proper formatting.
Where applicable, tabulate comparisons, differences, or anything that can be better understood in a table format.
Provide example code if the topic requires it.
Attach external links and references to topics which can explain a that topic in even farther detail and in-depth.
At the end of the notes, include at least 10 FAQ, the most commonly asked questions on the topic, and provide clear and concise answers for each.
Ensure the notes are detailed and cover every aspect of the topic. The goal is to have a complete, understandable, and comprehensive set of notes that will make studying efficient and easy, and don't shorten or summarize anything, provide the full concept and explaination.`
                }]
            }]
        });

            if (response.data.candidates && response.data.candidates.length > 0) {
                const rawText = response.data.candidates[0].content.parts[0].text;
                res.status(200).json({ notes: rawText });
            } else {
                console.error("Unexpected response format:", response.data);
                res.status(500).json({ error: "Sorry, I couldn't process your request." });
            }
        } catch (error) {
            console.error("Error fetching response", error);
            res.status(500).json({ error: "An error occurred while processing your request." });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
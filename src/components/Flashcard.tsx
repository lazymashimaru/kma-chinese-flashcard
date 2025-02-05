import { useState } from "react";

interface FlashcardProps {
  word: string;
  pinyin: string;
  translation: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ word, pinyin, translation }) => {
  const [flipped, setFlipped] = useState(false);

  const playPronunciation = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "zh-CN"; // Set the language to Chinese
    utterance.rate = 0.1
    utterance.pitch = 1.5
    speechSynthesis.speak(utterance);
  };

  return (
    <div
      className={`w-64 h-40 bg-blue-500 text-white flex items-center justify-center text-center rounded-2xl shadow-2xl cursor-pointer p-4 ${
        flipped ? "bg-green-500" : "bg-blue-500"
      }`}
      onClick={() => {
        setFlipped(!flipped);
        playPronunciation(); // Play pronunciation when card is clicked
      }}
    >
      {!flipped ? (
        <div>
          <h2 className="text-xl font-bold mb-2">{word}</h2>
          <p className="text-md italic">{translation}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">{word}</h2>
          <h2 className="text-xl font-bold">{pinyin}</h2>
        </div>
      )}
    </div>
  );
};

export default Flashcard;

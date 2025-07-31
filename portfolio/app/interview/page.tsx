"use client";

import { useState, useEffect } from "react";

const FlipGame = () => {
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matchedIndexes, setMatchedIndexes] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const emojis = ["🐶", "🐱", "🦁", "🐵", "🦊", "🐯", "🦄", "🐸"];
  const emojiPairs = [...emojis, ...emojis];

  const handleFlip = (index: number) => {
    if (flippedIndexes.includes(index)) return;
    if (flippedIndexes.length === 2) return;
    setFlippedIndexes((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const [first, second] = flippedIndexes;
      const firstEmoji = emojiPairs[first];
      const secondEmoji = emojiPairs[second];

      if (firstEmoji === secondEmoji) {
        setTimeout(() => {
          setMatchedIndexes((prev) => [...prev, first, second]);
          setFlippedIndexes([]);
        }, 1000);
      } else {
        setTimeout(() => {
          setFlippedIndexes([]);
        }, 1000);
      }
    }
  }, [flippedIndexes]);

  useEffect(() => {
    if (matchedIndexes.length === emojiPairs.length) {
      alert("🎉 Game is over!");
      setIsFinished(true);
    }
  }, [matchedIndexes]);

  const handleRestart = () => {
    setMatchedIndexes([]);
    setFlippedIndexes([]);
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="flex flex-col items-center gap-8 p-6 bg-white rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-blue-600">
          🐾 Flip Memory Game
        </h1>

        <div className="grid grid-cols-4 gap-4">
          {emojiPairs.map((emoji, index) => (
            <div
              key={index}
              onClick={() => handleFlip(index)}
              className="w-20 h-20 bg-blue-400 hover:bg-blue-500 transition-colors duration-300 rounded-lg flex items-center justify-center text-3xl font-medium text-white cursor-pointer select-none shadow-md"
            >
              {flippedIndexes.includes(index) || matchedIndexes.includes(index)
                ? emoji
                : "❓"}
            </div>
          ))}
        </div>

        <button
          onClick={handleRestart}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow-md transition-all duration-300"
        >
          {isFinished ? "🎮 Play Again" : "🔄 Restart"}
        </button>
      </div>
    </div>
  );
};

export default FlipGame;

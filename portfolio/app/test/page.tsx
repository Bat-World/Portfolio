"use client";

import { useState, useEffect, use } from "react";

const FlipGame = () => {
  const emojis = ["🐶", "🐱", "🦁", "🐵", "🦊", "🐯", "🦄", "🐸"];
  const emojiPairs = [...emojis, ...emojis];

  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matchedIndexes, setMatchedIndexes] = useState<number[]>([]);

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
        setMatchedIndexes((prev) => [...prev, first, second]);
      }
      setTimeout(() => {
        setFlippedIndexes([]);
      }, 1000);
    }
  }, [flippedIndexes]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {emojiPairs.map((emoji, index) => (
        <div
          key={index}
          onClick={() => handleFlip(index)}
          className="bg-amber-300 w-5 h-5 cursor-pointer"
        >
          {flippedIndexes.includes(index) || matchedIndexes.includes(index) ? emoji : ""}
        </div>
      ))}
    </div>
  );
};

export default FlipGame;

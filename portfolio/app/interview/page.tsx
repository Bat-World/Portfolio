"use client";

import { div, p } from "framer-motion/client";
import { useState, useEffect } from "react";

const FlipGame = () => {
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matchedIndexes, setMatchedIndexes] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false)

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
      if(matchedIndexes.length === emojiPairs.length){
         alert("🎉 Game is over!");
        setIsFinished(true);
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
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-4">
        {emojiPairs.map((emoji, index) => (
          <div
            key={index}
            onClick={() => handleFlip(index)}
            className="w-16 h-16 bg-blue-300 rounded-md flex items-center justify-center text-2xl cursor-pointer select-none"
          >
            {flippedIndexes.includes(index) || matchedIndexes.includes(index)
              ? emoji
              : ""}
          </div>
        ))}
      </div>
      <button onClick={handleRestart} className="cursor pointer">{isFinished ? "play again" : "restart"}</button>
    </div>
  );
};

export default FlipGame;

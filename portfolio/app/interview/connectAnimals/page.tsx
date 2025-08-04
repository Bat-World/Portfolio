"use client";

const ConnectAnimals = () => {
  const animals = ["🐶", "🐱", "🦁", "🐵", "🦊", "🐯", "🦄", "🐸"];
  const animalPairs = [...animals, ...animals]; 

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {animalPairs.map((animal, index) => (
          <div
            key={index}
            className="bg-white text-3xl p-4 flex justify-center items-center rounded shadow hover:bg-gray-100 cursor-pointer"
          >
            {animal}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectAnimals;

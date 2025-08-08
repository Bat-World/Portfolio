"use client";

import { useEffect, useState } from "react";


type Point = { row: number; col: number };

const rows = 6;
const cols = 8;

const ConnectAnimals = () => {
  const animals = ["🐶", "🐱", "🦁", "🐵", "🦊", "🐯", "🦄", "🐸"];
  const animalPairs = [...animals, ...animals, ...animals, ...animals]; 
  const totalCells = rows * cols;

  const [board, setBoard] = useState<string[][]>([]);
  const [selected, setSelected] = useState<Point[]>([]);
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);


  useEffect(() => {
    const shuffled = shuffleArray(animalPairs.slice(0, totalCells));
    const newBoard: string[][] = [];
    for (let r = 0; r < rows; r++) {
      newBoard.push(shuffled.slice(r * cols, (r + 1) * cols));
    }
    setBoard(newBoard);
  }, []);

  
  useEffect(() => {
    if (board.length > 0) {
      const hasAnimals = board.some(row => row.some(cell => cell !== ""));
      if (!hasAnimals) {
        setGameWon(true);
      }
    }
  }, [board]);

  const handleTileClick = (row: number, col: number) => {
    const tile = board[row][col];
    if (!tile || gameWon) return;

    const newSelection = [...selected, { row, col }];
    setSelected(newSelection);

    if (newSelection.length === 2) {
      const [a, b] = newSelection;
      const aVal = board[a.row][a.col];
      const bVal = board[b.row][b.col];

      if (
        aVal === bVal &&
        (a.row !== b.row || a.col !== b.col) &&
        canConnect(board, a, b)
      ) {
        removeMatched(a, b);
        setScore(score + 10);
      }

      setTimeout(() => {
        setSelected([]);
      }, 500);
    }
  };

  const removeMatched = (a: Point, b: Point) => {
    const newBoard = [...board.map((row) => [...row])];
    newBoard[a.row][a.col] = "";
    newBoard[b.row][b.col] = "";
    setBoard(newBoard);
  };

  const resetGame = () => {
    const shuffled = shuffleArray(animalPairs.slice(0, totalCells));
    const newBoard: string[][] = [];
    for (let r = 0; r < rows; r++) {
      newBoard.push(shuffled.slice(r * cols, (r + 1) * cols));
    }
    setBoard(newBoard);
    setSelected([]);
    setScore(0);
    setGameWon(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Connect Animals</h1>
        <p className="text-gray-600 mb-4">Match identical animals that can be connected with at most 2 turns!</p>
        <div className="flex justify-center items-center gap-6 mb-4">
          <div className="text-lg font-semibold text-blue-600">Score: {score}</div>
          <button 
            onClick={resetGame}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            New Game
          </button>
        </div>
        {gameWon && (
          <div className="text-2xl font-bold text-green-600 animate-pulse">
            🎉 Congratulations! You won! 🎉
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-8 gap-2 bg-gray-100 p-4 rounded-lg">
        {board.map((row, rowIndex) =>
          row.map((animal, colIndex) => {
            const isSelected = selected.some(
              (s) => s.row === rowIndex && s.col === colIndex
            );
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-12 h-12 flex justify-center items-center border-2 text-2xl rounded-lg transition-all duration-200 ${
                  animal
                    ? "bg-white cursor-pointer hover:bg-blue-50 hover:scale-105 border-gray-300"
                    : "bg-gray-200 border-gray-200"
                } ${isSelected ? "ring-4 ring-blue-400 bg-blue-100" : ""}`}
                onClick={() => handleTileClick(rowIndex, colIndex)}
              >
                {animal}
              </div>
            );
          })
        )}
      </div>
      
      <div className="mt-4 text-sm text-gray-600 text-center">
        Click two matching animals to connect them. They must be reachable with at most 2 turns through empty spaces.
      </div>
    </div>
  );
};


function shuffleArray(array: string[]): string[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


function canConnect(board: string[][], a: Point, b: Point): boolean {
  const directions = [
    { dr: -1, dc: 0 }, 
    { dr: 1, dc: 0 },  
    { dr: 0, dc: -1 }, 
    { dr: 0, dc: 1 },  
  ];

  const queue: {
    row: number;
    col: number;
    dir: number;
    turns: number;
  }[] = [];

  const visited = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Array(4).fill(Infinity))
  );

  for (let d = 0; d < 4; d++) {
    queue.push({ row: a.row, col: a.col, dir: d, turns: 0 });
    visited[a.row][a.col][d] = 0;
  }

  while (queue.length > 0) {
    const { row, col, dir, turns } = queue.shift()!;
    const nextRow = row + directions[dir].dr;
    const nextCol = col + directions[dir].dc;

    if (
      nextRow < 0 ||
      nextRow >= rows ||
      nextCol < 0 ||
      nextCol >= cols
    )
      continue;

    const isEndPoint = nextRow === b.row && nextCol === b.col;
    const isEmpty = board[nextRow][nextCol] === "";

    if (isEndPoint || isEmpty) {
      if (turns <= 2 && visited[nextRow][nextCol][dir] > turns) {
        visited[nextRow][nextCol][dir] = turns;
        queue.push({ row: nextRow, col: nextCol, dir, turns });

        for (let newDir = 0; newDir < 4; newDir++) {
          if (newDir !== dir) {
            const nextTurns = turns + 1;
            const r = nextRow + directions[newDir].dr;
            const c = nextCol + directions[newDir].dc;

            if (
              r >= 0 &&
              r < rows &&
              c >= 0 &&
              c < cols &&
              (board[r][c] === "" || (r === b.row && c === b.col)) &&
              nextTurns <= 2 &&
              visited[r][c][newDir] > nextTurns
            ) {
              visited[r][c][newDir] = nextTurns;
              queue.push({ row: r, col: c, dir: newDir, turns: nextTurns });
            }
          }
        }
      }
    }
  }

  return visited[b.row][b.col].some((t) => t <= 2);
}

export default ConnectAnimals;
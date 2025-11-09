"use client";
import { useState } from "react";
import Square from "@/components/atoms/Square";
import FormSquare from "@/components/molecules/FormSquare";

const defaultItems = [
  [1, 2],
  [3, 4],
];

const SquareGame = () => {
  const [squareItems, setSquareItems] = useState<number[][]>(defaultItems);
  const handleSubmit = (data: number[][]) => {
    setSquareItems(data);
  };

  return (
    <div className="container mx-auto p-4">
      <FormSquare onSubmit={handleSubmit} />
      <Square items={squareItems} />
    </div>
  );
};

export default SquareGame;

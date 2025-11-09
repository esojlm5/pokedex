"use client";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";

interface Props {
  onSubmit: (e: number[][]) => void;
}

const FormSquare = ({ onSubmit }: Props) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!value.length) {
      setError("");
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValue(input);

    try {
      const parsed = JSON.parse(input);

      const isValid =
        Array.isArray(parsed) &&
        parsed.every(
          (row) =>
            Array.isArray(row) && row.every((n) => typeof n === "number"),
        );

      if (!isValid) throw new Error("Not a 2D number array");
      setError("");
    } catch {
      setError("❌ Must be like [[1,2],[3,4]] — only numbers allowed");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.length > 0 && error === "") {
      onSubmit(JSON.parse(value));
    }
  };

  return (
    <>
      <form
        className="flex flex-col items-center gap-2 "
        onSubmit={handleSubmit}
      >
        <input
          value={value}
          onChange={handleChange}
          className="border-2 rounded-md mb-3"
        />
        {error.length > 0 && <span style={{ color: "red" }}>{error}</span>}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          submit
        </button>
      </form>
    </>
  );
};

export default FormSquare;

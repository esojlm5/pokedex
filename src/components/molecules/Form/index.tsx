import React, { FormEvent, useState } from "react";

interface Props {
  handleSubmit: (data: { email: string; password: string }) => void;
}
const Form = ({ handleSubmit }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "" && password.trim() !== "") {
      handleSubmit({ email, password });
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="">
      <form onSubmit={onSubmit} className="p-4 flex flex-col max-w-[400]">
        <div className="mb-4 flex flex-col ">
          <label className="mr-2">Email:</label>
          <input
            value={email}
            type="text"
            className="border-s-stone-950 border rounded-lg p-1.5"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label className="mr-2">Password:</label>
          <input
            value={password}
            type="password"
            className="border-s-stone-950 border rounded-lg p-1.5"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;

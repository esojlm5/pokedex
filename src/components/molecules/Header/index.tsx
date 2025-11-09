"use client";

import React from "react";
import { useAuthStore } from "../../../store/useAuthStore";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const { isLoggedIn, logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/login") {
    return null;
  }

  const handleClick = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const handleMyPokemons = () => {
    router.push("/my-pokemons");
  };

  return (
    <header className="flex justify-between items-center p-6 bg-yellow-400 border-b-4 border-yellow-600 shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 font-mono">🔥 Pokédex</h1>
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <button
            onClick={handleMyPokemons}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            My Pokemons
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;

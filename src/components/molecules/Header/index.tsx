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

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h1>Pokedex</h1>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={handleClick} className="cursor-pointer">
          Login
        </button>
      )}
    </header>
  );
};

export default Header;

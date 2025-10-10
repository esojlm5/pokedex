"use client";

import { useAuthStore } from "@/store/useAuthStore";

const Header = () => {
  const { isLoggedIn, login, logout } = useAuthStore();

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
        <button onClick={login}>Login</button>
      )}
    </header>
  );
};

export default Header;

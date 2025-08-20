import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../shared_components/Navbar";

const RootLayout = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Navbar setQuery={setQuery} />
      <main className="bg-black text-white">
        <Outlet context={{ query }} />
      </main>
    </div>
  );
};

export default RootLayout;

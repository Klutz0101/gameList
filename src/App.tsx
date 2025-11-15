import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Game from "./pages/Game.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import type { game } from "./src/models.ts";
import { bully, gh2, gtaSA, LOZBotW, phasmophobia } from "./src/Games.ts";
import { createContext, useState } from "react";

export const GamesContext = createContext<game[]>([]);

function App() {
  const [games, setGames] = useState<game[]>([]);

  setGames([bully, gtaSA, phasmophobia, LOZBotW, gh2]);

  return (
    <GamesContext value={games}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Router>
    </GamesContext>
  );
}

export default App;

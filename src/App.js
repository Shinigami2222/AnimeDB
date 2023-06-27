import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/NavBar";
import AllAnime from "./pages/AllAnime";
import AnimeDetail from "./pages/AnimeDetail";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllAnime />} />
        <Route path="/anime-details/:data" element={<AnimeDetail />} />
      </Routes>
    </div>
  );
}

export default App;

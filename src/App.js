import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/NavBar";
import AllAnime from "./pages/AllAnime";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/AnimeDB" element={<AllAnime />} />
      </Routes>
    </div>
  );
}

export default App;

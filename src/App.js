import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeItem from "./Components/AnimeItem";
import Gallery from "./Components/Gallery";
import Homepage from "./Components/Homepage";
import MenuBar from "./Components/MenuBar";

function App() {
  
  return (
    <BrowserRouter>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/anime/:id" element={<AnimeItem />} />
        <Route path="/character/:id" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


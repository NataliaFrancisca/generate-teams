import { GlobalStyle } from "./styles/global_style"

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Players from "./pages/Players";
import Teams from "./pages/Teams";

function App() {
  return (
    <div className="App">
     <GlobalStyle />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/players" element={<Players />} />
     </Routes>
    </div>
  )
}

export default App;
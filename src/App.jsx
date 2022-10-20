import { GlobalStyle } from "./styles/global"

import { Routes, Route } from "react-router-dom";

import PageHome from "./pages/PageHome/PageHome";
import PagePlayers from "./pages/PagePlayers/PagePlayers";
import PageTeams from "./pages/PageTeams/PageTeams";

function App() {
  return (
    <div className="App">
     <GlobalStyle />
     <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="teams/*" element={<PageTeams />} />
      <Route path="players/*" element={<PagePlayers />} />
     </Routes>
    </div>
  )
}

export default App;

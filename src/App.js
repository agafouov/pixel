import React from "react";
import { Routes, Route} from 'react-router-dom';
import Main from "./pages/Main";
import Raffle from "./pages/Raffle";
import Game from "./pages/Game";

function App() {
  return (
    <Routes>
      <Route path="/main" Component={Main}/>
      <Route path="/raffle" Component={Raffle}/>
      <Route path="/game" Component={Game}/>
    </Routes>
  );
}

export default App;

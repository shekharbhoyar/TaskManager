import "./App.css";
import Alltasks from "./pages/Alltasks";
import Comptasks from "./pages/Comptasks";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Incomptasks from "./pages/Incomptasks";
import Imptasks from "./pages/Imptasks";

function App() {
  return (
    <>
      <div className="bg-gray-900 text-white h-screen p-2">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Alltasks />} />
            <Route path="/compltedTasks" element={<Comptasks />} />
            <Route path="/incompltTasks" element={<Incomptasks />} />
            <Route path="/importantTasks" element={<Imptasks />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

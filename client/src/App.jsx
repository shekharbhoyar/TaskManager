import "./App.css";
import Alltasks from "./pages/Alltasks";
import Comptasks from "./pages/Comptasks";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Incomptasks from "./pages/Incomptasks";
import Imptasks from "./pages/Imptasks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

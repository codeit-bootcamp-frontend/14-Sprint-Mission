import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./componenets/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

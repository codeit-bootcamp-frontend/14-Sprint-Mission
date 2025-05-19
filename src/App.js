import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

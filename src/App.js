import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

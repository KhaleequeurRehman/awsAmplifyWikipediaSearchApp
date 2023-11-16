import logo from "./logo.svg";
import "./App.css";
import AddData from "./pages/AddData";
import { Routes, Route } from "react-router-dom";
import WikipidiaData from "./pages/WikipidiaData";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<AddData />} />
        <Route path="data" element={<WikipidiaData />} />
      </Routes>
    </>
  );
}

export default App;

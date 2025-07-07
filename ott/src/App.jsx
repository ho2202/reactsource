import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

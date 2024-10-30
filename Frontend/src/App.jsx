import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Update from "./Components/update";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-book" element={<Create />} />
          <Route path="/update-book/:id" element={<Update />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

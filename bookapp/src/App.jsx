import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import Error from "./components/Error";

function App() {
  // /add > Addbook
  // /edit/1 > EditBook
  // /books1 > BookDetails

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

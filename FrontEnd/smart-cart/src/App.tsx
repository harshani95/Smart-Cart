import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductTable from "./components/ProductTable";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductTable />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

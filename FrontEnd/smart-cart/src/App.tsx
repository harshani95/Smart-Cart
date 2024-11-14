import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductTable from "./components/ProductTable";
import Calculator from "./components/Calculator";
import PriceList from "./components/PriceList";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductTable />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/price-list" element={<PriceList />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

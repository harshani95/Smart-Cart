import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  unitsPerCarton: number;
  cartonPrice: number;
}

const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/v1/products/list"
    );
    console.log(response.data.data);
    setProducts(response.data.data);
  };

  return (
    <>
      <br />
      <h1 className="text-center">Product List</h1>
      <br />
      <div className="container">
        <table className="table table-hover table-bordered">
          <thead>
            <tr className="table-primary">
              <th>Id</th>
              <th>Product Name</th>
              <th>Units Per Carton</th>
              <th>carton Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="table-secondary">
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.unitsPerCarton}</td>
                <td>{product.cartonPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />

        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            style={{ marginRight: "10px" }}
            onClick={() => navigate("/price-list")}
          >
            Show Price List
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => navigate("/calculator")}
          >
            Calculate
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductTable;

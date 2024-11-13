import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const PriceList = () => {
  const [productId, setProductId] = useState("");
  const [priceList, setPriceList] = useState([]);

  const getPriceList = async () => {
    setPriceList([]); // Clear previous price list

    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/products/price-list",
        {
          params: { id: productId },
        }
      );
      setPriceList(response.data.data); // Set the fetched price list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <br />
      <div className="container">
        <h2 className="text-center">Price List</h2>

        {/* Product ID Input */}
        <div className="form-group">
          <label htmlFor="productId">Product ID: </label>
          <input
            type="number"
            id="productId"
            className="form-control"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter Product ID"
          />
        </div>
        <br />

        {/* Fetch Button */}
        <button className="btn btn-primary" onClick={getPriceList}>
          Get Price List
        </button>
        <Link
          className="btn btn-danger"
          to={"/"}
          style={{ marginLeft: "20px" }}
        >
          Cancel
        </Link>
        <br />
        <br />

        {priceList.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {priceList.map((entry, index) => {
                const [quantity, price] = entry
                  .split(", ")
                  .map((item: string) => item.split(": ")[1]); // Split the formatted string into quantity and price
                return (
                  <tr key={index}>
                    <td>{quantity}</td>
                    <td>{price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default PriceList;

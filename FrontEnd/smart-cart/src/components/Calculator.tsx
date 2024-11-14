import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [productId, setProductId] = useState("");
  const [cartons, setCartons] = useState("");
  const [singleUnits, setSingleUnits] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);

  const calculatePrice = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/products/calculate",
        {
          params: {
            id: productId,
            cartons: cartons,
            singleUnits: singleUnits,
          },
        }
      );

      setTotalPrice(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <br />

      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <br />
            <h1 className="text-center" style={{ color: "#0a3d62" }}>
              PRICE CALC
            </h1>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="productId">Product ID : </label>
                  <input
                    onChange={(e) => {
                      setProductId(e.target.value);
                    }}
                    value={productId}
                    type="number"
                    id="productId"
                    className="form-control"
                    required
                  />
                </div>
                <br />

                <div className="form-group">
                  <label htmlFor="cartons">Carton : </label>
                  <input
                    onChange={(e) => {
                      setCartons(e.target.value);
                    }}
                    value={cartons}
                    defaultValue={0}
                    type="number"
                    placeholder="Enter no of Cartons"
                    id="cartons"
                    className="form-control"
                    required
                  />
                </div>
                <br />

                <div className="form-group">
                  <label htmlFor="singleUnits">Single Unit : </label>
                  <input
                    onChange={(e) => {
                      setSingleUnits(e.target.value);
                    }}
                    value={singleUnits}
                    type="number"
                    placeholder="Enter no of Single Units"
                    defaultValue={0}
                    id="singleUnits"
                    className="form-control"
                    required
                  />
                </div>
                <br />

                <button
                  onClick={() => calculatePrice()}
                  className="btn btn-success"
                  type="button"
                >
                  Calculate
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

                {totalPrice !== null && (
                  <div>
                    <h2>Total Price: ${totalPrice}</h2>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;

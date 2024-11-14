import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [productId, setProductId] = useState("");
  //const [quantity, setQuantity] = useState("");
  const [cartons, setCartons] = useState("");
  const [singleUnits, setSingleUnits] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);
  //const [message, setMessage] = useState("");

  const calculatePrice = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/products/calculate",
        {
          params: {
            id: productId,
            //quantity: quantity,
            cartons: cartons,
            singleUnits: singleUnits,
          },
        }
      );

      setTotalPrice(response.data.data);
      //setMessage(response.data.message);
    } catch (error) {
      //setMessage("Error calculating price");
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
            <h3 className="text-center">Price Calculator</h3>
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
                {/* <div className="form-group">
                  <label htmlFor="qty">Quantity : </label>
                  <input
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    value={quantity}
                    type="number"
                    placeholder="QTY"
                    id="qty"
                    className="form-control"
                    required
                  />
                </div>
                <br /> */}

                <div className="form-group">
                  <label htmlFor="cartons">Carton : </label>
                  <input
                    onChange={(e) => {
                      setCartons(e.target.value);
                    }}
                    value={cartons}
                    type="number"
                    placeholder="cartons"
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
                    placeholder="Single Unit"
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
                {/* {message && <p>{message}</p>} */}

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

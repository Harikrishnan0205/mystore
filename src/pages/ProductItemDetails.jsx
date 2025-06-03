import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStoreinCart, removeFromCart } from "../../itemslice";
import PopupModal from "./PopupModel";

const ProductitemDetails = ({
  proddetails,
  increment,
  onincrement,
  showbtn,
  setShowModals
}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showText,setShowText] = useState("")

  const calculatediscount = (price, discount) =>
    Math.round(price - (price * discount) / 100);

  const addToCart = () => {
    // alert('Added to cart');
    console.log(increment);
    setShowModal(true);
    setShowText("Product is added to the Cart")
    console.log(proddetails.id);
    dispatch(setStoreinCart({ qty: increment, product: proddetails.id }));
  };
  const removeItemCart = () => {
      console.log(proddetails.id);
      setShowModals(true);
      dispatch(removeFromCart(proddetails.id));
  };

  return (
    <>
      <div>
        {proddetails && (
          <div className="border rounded p-3">
            <h4 className="fw-bold">{proddetails.title}</h4>
            <p className="text-muted">{proddetails.description}</p>
            <p className="text-success fw-semibold">
              <i className="bi bi-arrow-down me-1"></i>
              {proddetails.discountPercentage}% off
            </p>

            <div className="d-flex justify-content-between align-items-start my-3">
              <p className="text-warning">
                <i className="bi bi-star-fill"></i> {proddetails.rating}
              </p>
              <div>
                <p className="text-success mb-1">Special Price</p>
                <h5 className="mb-0">
                  <i className="bi bi-currency-rupee"></i>
                  {calculatediscount(
                    proddetails.price,
                    proddetails.discountPercentage
                  )}
                </h5>
                <p className="text-muted text-decoration-line-through">
                  <i className="bi bi-currency-rupee"></i>
                  {proddetails.price}
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center bg-light rounded p-2 w-auto mb-3">
              <button
                onClick={() => increment > 1 && onincrement(increment - 1)}
                className="btn btn-light p-0 me-2"
              >
                <i className="bi bi-dash-circle-fill fs-5 text-secondary"></i>
              </button>
              <span className="mx-2">{increment}</span>
              <button
                onClick={() => onincrement(increment + 1)}
                className="btn btn-light p-0 ms-2"
              >
                <i className="bi bi-plus-circle-fill fs-5 text-secondary"></i>
              </button>
            </div>

            <div className="d-flex gap-3">
              {showbtn === true ? (
                <button
                  className="btn btn-outline-danger w-50"
                  onClick={removeItemCart}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-primary w-50"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              )}
              {/* <button className="btn btn-outline-primary w-50" onClick={addToCart}>Add to Cart</button> */}
              <button className="btn btn-primary w-50">Buy Now</button>
            </div>
          </div>
        )}
      </div>
      <PopupModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Confirmation"
        body={showText}
      />
    </>
  );
};
export default ProductitemDetails;

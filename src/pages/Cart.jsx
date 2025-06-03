import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleProductDetails from "./SingleProductDetails";
import Navbar from "../components/Navbar";
import PopupModal from "./PopupModel";

const Cart = () => {
  const cartItems = useSelector((state) => state.item.storeinCart);
  const [showbtn,Toshowbtn] = useState(true);
  const [showModals, setShowModals] = useState(false);

  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])
  return (
    <>
    <Navbar/>
    <div className="container py-4">
       
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty😌.</p>
      ) : (
        cartItems.map((id,index) => (
          <SingleProductDetails key={index} productId={id.product} showbtn={showbtn} setShowModals={setShowModals}/>
        ))
      )}
    </div>
    <PopupModal
        show={showModals}
        onClose={() => setShowModals(false)}
        title="Confirmation"
        body="Item have been removed from Cart"
        onlyOk={true}
      />
    </>
    
  );
};

export default Cart;

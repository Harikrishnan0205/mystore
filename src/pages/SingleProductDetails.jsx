// components/SingleProductDetails.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductImage from './ProductImage';
import AboutProduct from './aboutProduct';
import ProductInfo from './ProductInfo';
import ProductitemDetails from './ProductItemDetails';

const SingleProductDetails = ({ productId,showbtn,setShowModals }) => {
  const [proddetails, setProddetails] = useState(null);
  const [increment, setIncrement] = useState(1);
  const [expand, setExpand] = useState(false);
  const [expandText, setExpandText] = useState(false);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProddetails(response.data);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, [productId]);

  if (!proddetails) return null;

  return (
    <>
    <div className="row mb-5">
      <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
        <ProductImage image={proddetails.thumbnail} />
      </div>
      <div className="col-lg-7 col-md-6 col-sm-12">
        <ProductitemDetails
          proddetails={proddetails}
          increment={increment}
          onincrement={setIncrement}
          showbtn={showbtn}
          setShowModals={setShowModals}
        />
        <ProductInfo
          proddetails={proddetails}
          expand={expand}
          onexpand={setExpand}
        />
        <AboutProduct
          proddetails={proddetails}
          expanttext={expandText}
          onexpandtext={setExpandText}
        />
      </div>
    </div>
    </>
  );
};

export default SingleProductDetails;

import React  from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SingleProductDetails from './SingleProductDetails';

import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const ProductDetails = () => {

  const productIds = useSelector((state) => state.item.storeProductId )
 
  return (
    <>
    <Navbar/>
    <div className="container py-4">
      <SingleProductDetails productId={productIds} /> 
    </div>
    </>
    
  );
};

export default ProductDetails;

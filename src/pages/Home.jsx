import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import Navbar from "../components/Navbar";
import Products from "../components/Product";

const Home = () => {
//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products?limit=60")
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

const [searchProduct,setsearchProduct] = useState('');
const [selectcategory,setselectCategory] = useState('');

// useEffect(()=>{
// console.log(searchProduct);
// console.log(selectcategory);

// },[searchProduct,selectcategory])

  return (
    <>
      <Navbar setsearchProduct={setsearchProduct}/>
      <Category setselectCategory = {setselectCategory}/>
      <Products searchProduct = {searchProduct} selectcategory={selectcategory}/>
    </>
  );
};
export default Home;

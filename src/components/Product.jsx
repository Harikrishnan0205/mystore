import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStoreId } from "../../itemslice";



const Products = ({ searchProduct, selectcategory }) => {

const dispatch = useDispatch();
 const navigate = useNavigate();

  const [products, setProduct] = useState([]);

  //filtering the search product by the taget value and use debouncing technique
  useEffect(() => {
    //console.log(searchProduct)
    const searchDelay = setTimeout(() => {
      axios
        .get("https://dummyjson.com/products?limit=60")
        .then((response) => {
          console.log(response.data.products);
          const filterProduct = response.data.products;
          const filterData = filterProduct.filter((searchitem, index) => {
            return searchitem.title
              .toLowerCase()
              .includes(searchProduct.toLowerCase());
          });
          setProduct(filterData);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);

    return () => {
      clearTimeout(searchDelay);
    };
  }, [searchProduct]);

  // to set the current active category tab
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=60")
      .then((response) => {
        // console.log(response.data.products);
        const filtercatProduct = response.data.products;
        if (selectcategory.toLowerCase() === "all") {
          setProduct(filtercatProduct);
        } else {
          const filtercatData = filtercatProduct.filter((selectedcat) => {
            return selectedcat.category
              .toLowerCase()
              .includes(selectcategory.toLowerCase());
          });
          setProduct(filtercatData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectcategory]);

  // selecting the product to save the id in redux store
  const onSelectProduct = (productid) => {
    console.log(productid);
    dispatch(setStoreId(productid))
    navigate('/productdetails')
  }

  return (
    <>
    <div className="container my-4">
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
              onClick={() => onSelectProduct(product.id)}
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="mb-1">
                    <strong>
                      $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </strong>
                    <span className="text-muted text-decoration-line-through ms-2">
                      ${product.price}
                    </span>
                    <span className="text-success ms-2">
                      ({product.discountPercentage}% OFF)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "200px" }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Products;

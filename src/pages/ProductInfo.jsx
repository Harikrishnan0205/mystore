import React from "react";


const ProductInfo = ({proddetails,expand,onexpand}) => {
 return(
    <>
        <div>
        {proddetails && (
            <div className="mt-4 border-top pt-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5>Product Details</h5>
                <i
                  className={`bi ${expand ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill'} fs-4 cursor-pointer`}
                  onClick={() => onexpand(!expand)}
                ></i>
              </div>
              {expand && (
                <div className="mt-2">
                  <p><strong>Brand:</strong> {proddetails.brand}</p>
                  <p><strong>Stock:</strong> {proddetails.stock}</p>
                  <p><strong>Category:</strong> {proddetails.category}</p>
                </div>
              )}
            </div>
        )}
        </div>
        </>
 )
   
}

export default ProductInfo
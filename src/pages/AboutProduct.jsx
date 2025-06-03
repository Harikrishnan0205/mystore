import React from "react";


const AboutProduct = ({proddetails,expanttext,onexpandtext}) => {
    return(
        <>
        <div>
        {proddetails && (
        <div>
             <div className="mt-4 border-top pt-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5>About this Item</h5>
                <i
                  className={`bi ${expanttext ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill'} fs-4 cursor-pointer`}
                  onClick={() => onexpandtext(!expanttext)}
                ></i>
              </div>
              {expanttext && (
                <p className="mt-2">{proddetails.description}</p>
              )}
            </div>

        </div>
        )}
        </div>
        </>
    )
}

export default AboutProduct
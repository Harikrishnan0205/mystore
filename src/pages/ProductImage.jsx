import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ProductImage = ({ image }) => {
    return (
        <>
        <div>
            <Zoom>
                <img
                    alt="product"
                    src={image}
                    style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "600px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        cursor: "zoom-in",
                       
                    }}
                />
            </Zoom>
        </div>
        </>
    )
}

export default ProductImage
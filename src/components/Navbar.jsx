import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ setsearchProduct }) => {
  const [searchProduct, onsearchProduct] = useState('');
  const cartcount = useSelector((state) => state.item.storeinCart.length);

  useEffect(() => {
    console.log("Navbar count:", cartcount);
  }, [cartcount]);

  // geting the input search
  const onFilterProduct = (e) => {
    setsearchProduct(e.target.value);
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm py-3">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand fw-bold text-primary">
          myStore
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <form className="d-flex mx-lg-auto my-2 my-lg-0 w-100" role="search">
            <input
              onChange={onFilterProduct}
              className="form-control me-2"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
          </form>

          <ul className="navbar-nav ms-lg-3 d-flex flex-row align-items-center gap-4">
            <li className="nav-item d-flex align-items-center text-primary">
              <i className="bi bi-person-circle fs-5 me-1"></i>
              <span className="d-none d-sm-inline">Login</span>
            </li>

            <li className="nav-item">
              <Link to="/cart" className="text-decoration-none d-flex align-items-center text-primary position-relative">
                <i className="bi bi-bag fs-5 me-1"></i>
                <span className="d-none d-sm-inline">Cart</span>
                {cartcount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartcount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

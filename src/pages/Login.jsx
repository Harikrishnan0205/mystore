import React, { useState } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [enterpwd, onenterpwd] = useState('');
  const [enteremail, onenteremail] = useState('');

  function onenterEmail(event) {
    onenteremail(event.target.value);
  }
  function onenterPassword(event) {
    onenterpwd(event.target.value);
  }

  function onSubmitdata (){
   navigate('/home');
  }

  return (
    <>
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Login</h3>

            <div className="form-floating mb-3">
              <input
                type="email"
                id="floatingemail"
                className="form-control"
                placeholder="Email"
                value={enteremail}
                onChange={onenterEmail}
                
              />
              <label htmlFor="floatingemail">Email</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                id="floatingpassword"
                className="form-control"
                placeholder="Password"
                value={enterpwd}
                onChange={onenterPassword}
                
              />
              <label htmlFor="floatingpassword">Password</label>
            </div>

            <div className="d-grid">
              <button onClick={onSubmitdata} className="btn btn-primary btn-lg" style={{  border: 'none' }}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;


import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    

    <div>
          <div className="container mt-5 ">
              <div className="row ">
                  <div className="col-md-6 offset-md-3">
                      <div className="card">
                          <div className="card-header fs-2 text-success text-center">
                              Home
                          </div>
                          <div className="card-body text-center">
                              <p>Welcome to the Password Reset Flow</p>
                              <p className="text-muted text-center"> If you are new to this site ,please SignUp and you are already know to site Login this </p>
                               
                              <Link  to="/register">SignUp</Link>      <br/>
                              <Link  to="/login">Login</Link>      <br/>
                              <Link  to="/forgot-password">Forget Password</Link>      <br/>
                            
                              
                        </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Home;
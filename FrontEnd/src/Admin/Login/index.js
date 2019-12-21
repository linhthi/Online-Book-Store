import React from 'react';

function Login() {
    return (
        <div style={{marginTop: "20px"}}>
            <div className="col-md-4" style={{margin: "0 auto"}}>
                <form style={{background: "#A9F5E1"}}>
                    <h3 style={{textAlign: "center"}}>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>

                </form>
            </div>
            <div className="col-md-4"></div>
         </div>
    );
}

export default Login;

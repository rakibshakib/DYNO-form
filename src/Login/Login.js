import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <>
            <h2>Login</h2>
            <span>for regular customers</span>
            <div className="login__page-background">
                <form className="login__page">
                    <h3>Login</h3>
                    <div className="input-group my-4">
                        <span className="input-group-text">  +88 </span>
                        <input type="text" className="form-control" name="mobileNumber" placeholder="Enter Mobile Number" />
                    </div>
                    <div className="input-group my-3">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="login__btn">
                        <button type="submit" className="btn btn-primary"> Login </button>
                    </div>
                </form>
                <p className="login__form-para">if you have no any account, please create an account <span>sign up here</span></p>
            </div>
        </>
    );
};

export default Login;
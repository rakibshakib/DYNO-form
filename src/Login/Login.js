import React from 'react';
import '../Pages/default.css';
import './Login.css';

const Login = () => {
    return (
        <>
            <h2>Login</h2>
            <p>for regular customers</p>
            <div className="form__background">
                <form className="login__page form-default">
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
                <p className="form__para">if you have no any account, please create an account <span>sign up here</span></p>
            </div>
        </>
    );
};

export default Login;
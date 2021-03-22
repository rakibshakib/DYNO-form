import React from 'react';
import {FaFacebookF } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import './DirectLogin.css'

const DirectLogin = () => {
    return (
        <>
            <h2>Direct Login</h2>
            <p>for guest customers</p>
            <div className="form__background">
                <form className="directlogin__page form-default">
                    <h3>Direct Login</h3>
                    <div className="directLogin__btn">
                        <button type="button" className="DL-fb-btn"><FaFacebookF/> login with facebook</button>
                    </div>
                    <div className="directLogin__btn">
                        <button type="button" className="DL-em-btn"><AiOutlineMail/> login with email </button>
                    </div>
                    <div className="input-group my-4">
                        <span className="input-group-text">  +88 </span>
                        <input type="text" className="form-control" name="mobileNumber" placeholder="Enter Mobile Number" />
                    </div>
                    <h4>Or</h4>
                    <div className="login__btn">
                        <button type="submit" className="btn btn-primary"> Login </button>
                    </div>
                </form>
                <p className="form__para">if you have no any account, please create an account <span>sign up here</span></p>
            </div>
        </>
    );
};

export default DirectLogin;
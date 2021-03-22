import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <>
            <h2>SignUp</h2>
            <p>create an account to get more discounts and prifit</p>
            <div className="form__background">
                <form className="signUp__page form-default">
                    <h3>SignUp</h3>
                    <p>please fill in the form to create an account</p>
                    <div className="input-group my-4">
                        <input type="text" className="form-control" name="name" placeholder="your name" />
                    </div>
                    <div className="input-group my-4">
                        <input type="number" className="form-control" name="mobileNumber" placeholder="Enter Mobile Number" />
                    </div>
                    <div className="input-group my-3">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="input-group my-3">
                        <input type="password" className="form-control" placeholder="Confirm Password" />
                    </div>


                    <div className="my-3 form-check">
                        <input type="checkbox" className="form-check-input"  />
                        <label className="form-check-label" for="check">have reference number?</label>
                    </div>
                    <div className="my-3 form-check">
                        <input type="checkbox" className="form-check-input"  />
                        <label className="form-check-label" for="check">I accept the <span>terms of use</span> and <span>privacy &#38; policy</span></label>

                    </div>
                    <div className="login__btn">
                        <button type="submit" className="btn btn-primary"> SignUp </button>
                    </div>
                </form>
                <p className="form__para"> already have an account?  <span>login here</span></p>
            </div>
        </>
    );
};

export default SignUp;
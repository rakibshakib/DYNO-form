import React from 'react';
import DirectLogin from '../DirectLogin/DirectLogin';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const Pages = () => {
    return (
        <div className="container-fluid">
            <div class="row">
                <div className="col-md-4">
                    <Login />
                </div>
                <div className="col-md-4">
                    <SignUp />
                </div>
                <div className="col-md-4">
                    <DirectLogin />
                </div>
            </div>
        </div>
    );
};

export default Pages;
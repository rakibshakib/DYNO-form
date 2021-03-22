import React from 'react';
import './curierDetails.css';

const CourierDetailsForm = () => {
    return (
        <div className='container py-5 curierDetails'>
            <h2 className='curierDetails_fillUp'>Fill Up</h2>
            <div className="curierDetails__form my-5">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Your Name</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="mb-3 ">
                        <label for="exampleInputPassword1" className="form-label">Mobile Number</label><br />
                        <div className="input-group">
                            <span className="input-group-text">  +88 </span>
                            <input type="number" className="form-control" id="" />
                        </div>
                    </div>

                    <div className="curierdetails__select row">
                        <div className="curierdetails__select-details col-md-4 col-sm-6">
                            <label className="form-label">District</label>
                            <select class="form-select" required>
                                <option selected value="">Dhaka</option>
                                <option select>Barishal</option>
                            </select>
                        </div>
                        <div className="curierdetails__select-details col-md-4 col-sm-6">
                            <label className="form-label">Thana</label>
                            <select class="form-select" required>
                                <option selected value="">Dhaka</option>
                                <option select>Barishal</option>
                            </select>
                        </div>
                        <div className="curierdetails__select-details col-md-4 col-sm-6">
                            <label className="form-label">Area</label>
                            <select class="form-select" required>
                                <option selected value="">Dhaka</option>
                                <option select>Barishal</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="" className="form-label">Adress</label>
                        <input type="text" className="form-control" id="" />
                    </div>

                    <button type="submit" className="btn btn-primary">Next</button>
                </form>
            </div>

        </div>
    );
};

export default CourierDetailsForm;
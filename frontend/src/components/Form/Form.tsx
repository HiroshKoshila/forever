import React from "react";

const Form: React.FC = () => {
    return (
        <div className="form">
            <div className="row-col-2">
                <input type="radio" value="1" id="cat_1" name="cat_1" />
                <label>$10</label>
            </div>
            <div className="row-col-2">
                <input type="radio" value="2" id="cat_2" name="cat_2"/>
                <label>$50</label>
            </div>
            <div className="row-col-2">
                <input type="radio" value="3" id="cat_3" name="cat_3" />
                <label>$100</label>
            </div>
            <div className="row-col-2">
                <input type="radio" value="4" id="cat_4" name="cat_4"/>
                <label>$500</label>
            </div>
            <div className="row-col-2">
                <input type="radio" value="5" id="cat_5" name="cat_5" />
                <label>$1000</label>
            </div>
            <button className="btn btn-card">Pay Now</button>
        </div>
    );
}

export default Form;
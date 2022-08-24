import React from 'react';
import "./Loading.css";

const Loader = () => {
    return (
        <div className="loading">
            <input id="check" type="checkbox" />
            <label for="check">
                <div className="check-icon"></div>
            </label>
        </div>
    )
}

export default Loader
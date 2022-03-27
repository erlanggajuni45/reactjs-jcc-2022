import React from "react";

const Body = (props) => {
    return(
        <>
        <div className="row">
            <div className="section">
                <div className="card">
                    {props.children}
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Body;
import React from "react";

const Cards = (props) => {
    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos fugit reprehenderit non blanditiis iure laborum dolor repellendus odio illum, pariatur maxime perspiciatis deserunt? Fugit officia saepe laborum ad blanditiis.</p>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>


    );

}
export default Cards



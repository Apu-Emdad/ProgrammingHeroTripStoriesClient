import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, price, img, about, _id } = service;
  return (
    <div className="col ">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{about}</p>
          <Link to={`services/${_id}`}>
            <button className="btn-danger">Purchase for {price}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;

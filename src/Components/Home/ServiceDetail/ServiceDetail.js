import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  const url = `https://serene-retreat-28688.herokuapp.com/services/${serviceId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setService(data);
      });
  }, []);
  const { img, about, name, price, registered } = service;
  return (
    <div className="card text-center container">
      <div className="card-header service-header">
        <h4>{name}</h4>
        <img className="d-block w-50 mx-auto" src={img} alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title">Registry Number: {registered}</h5>
        <p className="card-text">{about}</p>
        <Link to={`../purchase/${serviceId}`}>
          <button className="btn btn-danger">Purchase for {price}$</button>
        </Link>
      </div>
      <div className="card-footer text-muted">Have a nice tour</div>
    </div>
  );
};

export default ServiceDetail;

import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://serene-retreat-28688.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        const ServiceCount = data.slice(0, 6);
        setServices(ServiceCount);
      })
      .finally(() => setLoading(false));
  }, []);
  //   console.log(services);
  return (
    <div id="services" className="container">
      <h1 className="text-primary">Our Popular Bikes </h1>
      {loading && <Spinner animation="border" variant="danger" />}
      <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

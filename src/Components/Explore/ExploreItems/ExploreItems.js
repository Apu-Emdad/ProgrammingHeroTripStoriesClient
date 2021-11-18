import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Service from "../../Home/Service/Service";

const ExploreItems = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://serene-retreat-28688.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div id="services" className="container">
      <h1 className="text-primary">Explore Our Bikes </h1>
      {loading && <Spinner animation="border" variant="danger" />}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default ExploreItems;

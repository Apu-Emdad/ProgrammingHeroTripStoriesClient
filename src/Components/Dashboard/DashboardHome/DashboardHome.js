import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Admin from "../Admin/Admin";
import User from "../User/User";

const DashboardHome = (props) => {
  const { isAdmin } = props;
  const { user } = useAuth();
  // console.log(isAdmin);

  const [show, setShow] = useState(true);
  const { logOut } = useAuth();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="text-start  mx-2 bg-secondary">
        <Button variant="primary" onClick={handleShow}>
          My Dashboard
        </Button>
        <span className="text-light px-2">Dashboard</span>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{user.displayName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {!isAdmin && <User handleClose={handleClose}></User>}
          {isAdmin && <Admin handleClose={handleClose}></Admin>}
          <button className="btn btn-primary py-1 px-3 my-3" onClick={logOut}>
            Log Out
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default DashboardHome;

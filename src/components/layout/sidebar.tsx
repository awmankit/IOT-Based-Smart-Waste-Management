import * as React from "react";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase";
import { deleteCookie, getCookie } from "../../services/cookies";

function Sidebar() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    auth.signOut();
    deleteCookie();
    navigate("/login");
  };

  return (
    <div>
      <div
        className="d-flex flex-column align-items-center justify-content-between"
        id="Sidebar"
      >
        <div className="justify-content-center" id="Project-Logo">
          <Link
            to="/dashboard"
            className="d-flex align-items-center justify-content-center"
            reloadDocument
          >
            <img
              src="./assets/img/artemis-favicon.webp"
              width="auto"
              height="48px"
              className="me-2"
            />
            <h1>ArteMIS</h1>
          </Link>
        </div>

        <div
          className="d-flex flex-column justify-content-center align-items-center w-100"
          id="Lists"
        >
          <div className="col w-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center justify-content-start row border-bottom rounded-0 border-1 btn bg-red w-100 bg-green m-0 py-3 ps-5 pe-3"
              reloadDocument
            >
              <img
                src="./assets/img/home.png"
                height="30px"
                className="w-auto"
              />
              Dashboard
            </Link>
            <Link
              to="/maps"
              className="d-flex align-items-center justify-content-start ps-5 row border-bottom rounded-0 border-1 btn bg-red w-100 bg-green m-0 py-3 pe-3"
              reloadDocument
            >
              <img
                src="./assets/img/maps.png"
                height="30px"
                className="w-auto"
              />
              Maps
            </Link>
            <Link
              to="/bin"
              className="d-flex align-items-center justify-content-start ps-5 row border-bottom rounded-0 border-1 btn bg-red w-100 bg-green m-0 py-3 pe-3"
              reloadDocument
            >
              <img
                src="./assets/img/bin.png"
                height="20px"
                className="w-auto ms-1 me-2"
              />
              Trashbin
            </Link>
            {/* <Link
              to="/auth"
              className="d-flex align-items-center justify-content-start ps-5 row border-bottom rounded-0 border-1 btn bg-red w-100 bg-green m-0 py-3 pe-3"
              reloadDocument
            >
              <img
                src="./assets/img/access.png"
                height="30px"
                className="w-auto"
              />
              Auth
            </Link> */}
          </div>
        </div>

        <button type="button" onClick={handleSignOut} className="btn btn-light">
          SIGN OUT
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

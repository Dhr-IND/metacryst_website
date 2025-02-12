import React, { useState } from "react";
import styles from "./Navbar.module.css";
import metalogo from "../../assets/metalogo.png";
import iitilogo from "../../assets/iitilogo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleToggle = () => {
    setIsResponsive((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.clubname}>
        <div className={styles.logo}>
          <a href="/">
            <img
              src={metalogo}
              alt=""
              style={{
                margin: "1vh 2vw",
                width: "65px",
                height: "50px",
                backgroundColor: "transparent",
              }}
            />
          </a>
        </div>
        <div style={{ margin: "1vh 2vw" }}>
          <a
            href="/"
            style={{
              fontSize: "4vh",
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            MetaCryst Club - IIT Indore
          </a>
        </div>
        <div>
          <a href="https://www.iiti.ac.in/" target="_blank">
            <img
              src={iitilogo}
              alt=""
              style={{
                margin: "1vh 2vw",
                width: "65px",
                height: "50px",
                backgroundColor: "transparent",
              }}
            />
          </a>
        </div>
      </div>

      <div className={styles.navbar}>
        <div
          className={`${styles.topnav} ${
            isResponsive ? styles.responsive : ""
          }`}
          id="myTopnav"
        >
          <Link to="/" >Home</Link>
          <Link to="/aboutus" >About us</Link>
          <Link to="/news" >News</Link>
          <Link to="/activities" >Activities</Link>
          <Link to="/team" >Team</Link>
          <button className={styles.joinus} onClick={() => window.location.href='https://chat.whatsapp.com/HL0GTYmaxIGKxkPVugqjdR'}>Join Us</button>
          <a
            href="javascript:void(0);"
            className={styles.icon}
            onClick={handleToggle}
          >
            <i className="fas fa-bars"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;

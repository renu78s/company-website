import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeContent.css";
import Button from "@mui/material/Button";
const HomeContent = (props) => {
  const { name, imgsrc, visit, btname } = props;
  const style = {
    color: "white",
  };

  return (
    <>
      <div className="main_container container">
        <div className="seaction_2">
          <img src={imgsrc} alt="" className="animate img-fluid" />
        </div>

        <div className="seaction_1">
          <h1 style={style}>
            {name}
            <strong> web BB</strong>
          </h1>
          <h2 style={style}>
            we are team of talented developer making websites.
          </h2>

          <NavLink to={visit}>
            <Button variant="contained">{btname}</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomeContent;

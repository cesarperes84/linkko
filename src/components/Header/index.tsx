import React from "react";
import CableIcon from "@mui/icons-material/Cable";
import * as S from "./StyledHeader";

export const Header = () => (
  <div style={{ display: "flex", height: "35px" }}>
    <div
      style={{
        height: "30px",
        width: "30px",
        borderRadius: "40px",
        padding: "5px",
        marginRight: "8px",
      }}
    >
      <CableIcon fontSize="large" style={{ fontSize: "40px" }}/>
    </div>
    <h1
      className="center"
      style={{
        fontFamily: "'Fugaz One'",
        fontSize: "36px",
        fontWeight: "normal",
        marginLeft: "5px",
        textDecoration: "italic",
        color: "#FFF"
      }}
    >
      Connect.io
    </h1>
  </div>
);

export default Header;

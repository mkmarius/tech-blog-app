import React from "react";
import { HeaderStyled } from "../styles/headerStyling";
import "../styles.css";

const Header = () => {
    return (
        <HeaderStyled>
            <h1 className="logo">Latest technology news</h1>
        </HeaderStyled>
    );
};

export default Header;

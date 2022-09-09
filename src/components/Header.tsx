import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 60px;
`;

const LogoImg = styled.img`
    width: 78px;
    height: 56px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Link to="/">
                    <LogoImg src={logo} />
                </Link>
            </div>
        </HeaderContainer>
    );
};

export default Header;

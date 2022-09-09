import React, { Component } from "react";
import styled from "styled-components";
import SignInContainer from "../container/SignInContainer";

export default class SignInPage extends Component {
    render() {
        return (
            <BackgroundContainer>
                <SignInContainer />
            </BackgroundContainer>
        );
    }
}

const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fafaf6;
`;

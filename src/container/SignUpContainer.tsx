import React from "react";
import InputForm from "../components/SignUp/InputForm";
import styled from "styled-components";

function SignUpContainer() {
    return (
        <BackgroundContainer>
            <CardBackground>
                <InputForm />
            </CardBackground>
        </BackgroundContainer>
    );
}

export default SignUpContainer;

const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fafaf6;
`;

const CardBackground = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 600px;
    background: #ffffff;
    border-radius: 15px;
    text-align: center;
`;

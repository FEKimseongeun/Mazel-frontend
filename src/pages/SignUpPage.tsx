import React from "react";
import SelectType from "../container/StartSignupContainer";
import styled from "styled-components";
function SignUpPage() {
    return (
        <>
            <BackgroundContainer>
                <SelectType />
            </BackgroundContainer>
        </>
    );
}

export default SignUpPage;

const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fafaf6;
`;

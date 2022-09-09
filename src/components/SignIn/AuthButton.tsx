import React from "react";
import styled from "styled-components";

const AuthButton: any = (props: any) => {
    return <Wrapper onClick={props.onClick}>{props.children}</Wrapper>;
};

export default AuthButton;

const Wrapper = styled.div`
    margin-top: 3rem;
    padding: 0.8rem 0.5rem;
    width: 100%;

    background: #fb5c00;
    color: white;
    border-radius: 10px;

    text-align: center;
    font-size: 1rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: 0.2s all;

    &:hover {
        background: #ff8124;
    }

    /* &:active {
        background: #A8A8A8;
    } */
`;

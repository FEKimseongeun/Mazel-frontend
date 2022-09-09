import React from "react";
import styled from "styled-components";

const AuthInput: any = (props: any) => {
    return (
        <Wrapper>
            <Label>{props.label}</Label>
            <Input {...props.rest} placeholder={props.placeholder} />
        </Wrapper>
    );
};

export default AuthInput;

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    & + & {
        margin-top: 2rem;
    }
`;

const Label = styled.div`
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin-bottom: 0.25rem;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid lightgray;
    outline: none;
    border-radius: 10px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

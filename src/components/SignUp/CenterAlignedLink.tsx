import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CenterAlignedLink: any = (props: any) => {
    return (
        <Aligner>
            이미 계정이 있으신가요? <StyledLink to={props.to}>로그인 하기</StyledLink>
        </Aligner>
    );
};

export default CenterAlignedLink;

const Aligner = styled.div`
    margin-top: 3rem;
    text-align: center;

    font-size: 0.8rem;
`;

const StyledLink = styled(Link)`
    color: black;
    font-weight: bold;
    text-decoration: underline;

    &:hover {
        color: gray;
    }
`;

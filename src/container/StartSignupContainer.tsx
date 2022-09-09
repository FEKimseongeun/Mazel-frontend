import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CenterAlignedLoginLink from "../components/SignUp/CenterAlignedLink";
import logoImg from "../assets/images/logoimg.png";

function StartSignupContainer() {
    return (
        <CardBackground>
            <ContentWrap>
                <LogoImage src={logoImg} />
                <Wrapper>
                    <InputTitle>반가워요, 마즐러님!🖐</InputTitle>
                    <InputTitle style={{ fontSize: "14px" }}>
                        회원가입하고 마즐에서
                        <br />내 취향에 맞는 음료를 추천받아보세요!
                    </InputTitle>
                </Wrapper>
            </ContentWrap>
            <Link to="/signup">
                <BottomButton>이메일로 가입하기</BottomButton>
            </Link>
            <CenterAlignedLoginLink to="/signin" />
        </CardBackground>
    );
}

export default StartSignupContainer;
const CardBackground = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 500px;
    background: #ffffff;
    border-radius: 15px;
`;

const ContentWrap = styled.div`
    width: 400px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const LogoImage = styled.img`
    position: absolute;
    left: 50%;
    top: 50px;
    margin-left: -80px;
`;

const Wrapper = styled.div`
    margin-top: 13rem;
`;

const InputTitle = styled.div`
    font-size: 20px;
    font-weight: 900;
    color: #262626;

    text-align: center;
`;

const BottomButton = styled.button`
    width: 400px;
    height: 48px;
    border: 1px solid #fb5c00;
    font-weight: 700;
    border-radius: 10px;
    color: #fb5c00;
    margin: auto;
    margin-top: 40px;
    display: block;
    text-align: center;
    cursor: pointer;

    &:hover {
        transition: all ease 0.1s;
        transform: scale(1.02);
        background-color: #fb5c00;
        color: #ffffff;
    }
`;

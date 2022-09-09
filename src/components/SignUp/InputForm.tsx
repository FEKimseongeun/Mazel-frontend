import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function InputForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [checkPw, setcCheckPw] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [checkPwValid, setCheckPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handlePw = (e: any) => {
        setPw(e.target.value);
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

        if (regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    };

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if (regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    };

    const handlePwCheck = (e: any) => {
        setcCheckPw(e.target.value);

        if (pw == checkPw) {
            setCheckPwValid(true);
        } else {
            setCheckPwValid(false);
        }
    };

    const onSubmitButton = (e: any) => {
        e.preventDefault();

        const data = {
            email: email,
            passwd: pw,
        };
        /* eslint-disable */
        const qs = require("qs");
        console.log(qs.stringify(data));
        const res = axios({
            headers: {
                withCredentials: true,
                "Access-Control-Allow-Origin": "http://localhost:3000",
                Accept: "application/json",
            },
            method: "post",
            url: "http://mazle.ml/users/create/",
            data: qs.stringify(data),
        })
            .then((res) => {
                console.log(res);
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("isLogin", "1");
                alert("회원가입이 완료되었습니다!");
                navigate("/signin");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (pwValid && emailValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid]);

    return (
        <>
            <div>
                <SignupBox>
                    <div>
                        <InputLabel>이메일</InputLabel>
                        <InputFormEmail type="email" placeholder="이메일" value={email} onChange={handleEmail} />
                    </div>
                    <InputLabel>비밀번호</InputLabel>
                    <InputFormBlock type="password" placeholder="비밀번호" value={pw} onChange={handlePw} />
                    <ErrorMessageWrap>
                        {!pwValid && pw.length > 0 && (
                            <div>비밀번호는 특수문자와 숫자를 포함해 8자 이상 입력해주세요.</div>
                        )}
                    </ErrorMessageWrap>
                    <InputLabel>비밀번호 확인</InputLabel>
                    <InputFormBlock
                        type="password"
                        placeholder="비밀번호 다시 입력"
                        value={checkPw}
                        onChange={handlePwCheck}
                    />
                    <ErrorMessageWrap>
                        {checkPwValid && checkPw.length > 0 && <div>비밀번호가 일치하지 않습니다.</div>}
                    </ErrorMessageWrap>
                </SignupBox>
            </div>
            <FormButton onClick={onSubmitButton} disabled={notAllow}>
                회원가입
            </FormButton>
        </>
    );
}

export default InputForm;

const SignupBox = styled.div`
    margin-top: 100px;
`;

const InputLabel = styled.div`
    width: 400px;
    text-align: left;
    margin: auto;
    font-weight: 900;
    font-size: 14px;
`;

const InputFormEmail = styled.input`
    width: 400px;
    height: 40px;
    margin: 10px auto;
    margin-bottom: 30px;
    border: 1.5px solid #d2d2d2;
    border-radius: 10px;
    padding: 10px;
    &:focus {
        outline: 2px solid #fb5c00;
    }
`;

const InputFormBlock = styled.input`
    width: 400px;
    height: 40px;
    display: block;
    padding: 10px;
    margin: 10px auto;
    border: 1.5px solid #d2d2d2;
    border-radius: 10px;
    &:focus {
        outline: 2px solid #fb5c00;
    }
`;

const ErrorMessageWrap = styled.div`
    margin-top: 8px;
    margin-left: 50px;
    color: #ef0000;
    font-size: 12px;
    text-align: left;
    margin-bottom: 30px;
`;

const FormButton = styled.button`
    width: 400px;
    height: 45px;
    margin-top: 15px;
    margin-bottom: 10px;
    color: white;
    background-color: #fb5c00;
    border: 0;
    outline: 0;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        transition: all ease 0.1s;
        transform: scale(1.02);
    }

    &:disabled {
        background-color: #dadada;
        color: white;
    }
`;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function InputForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    // const [checkPw, setcCheckPw] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [checkPwValid, setCheckPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handlePw = (e: any) => {
        setPw(e.target.value);
        const regex = /^(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

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
        const checkpw = e.target.value;
        console.log(checkpw, pw);
        if (checkpw == pw) {
            setCheckPwValid(false);
        } else {
            setCheckPwValid(true);
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
            url: "http://13.125.182.32/users/create/",
            data: qs.stringify(data),
        })
            .then((res) => {
                console.log(res);
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("isLogin", "1");
                alert("??????????????? ?????????????????????!");
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
                        <InputLabel>?????????</InputLabel>
                        <InputFormEmail type="email" placeholder="?????????" value={email} onChange={handleEmail} />
                    </div>
                    <InputLabel>????????????</InputLabel>
                    <InputFormBlock type="password" placeholder="????????????" value={pw} onChange={handlePw} />
                    <ErrorMessageWrap>
                        {!pwValid && pw.length > 0 && (
                            <div>??????????????? ??????????????? ????????? ????????? 8??? ?????? ??????????????????.</div>
                        )}
                    </ErrorMessageWrap>
                    <InputLabel>???????????? ??????</InputLabel>
                    <InputFormBlock type="password" placeholder="???????????? ?????? ??????" onChange={handlePwCheck} />
                    <ErrorMessageWrap>
                        {checkPwValid ? <div>??????????????? ???????????? ????????????.</div> : null}
                    </ErrorMessageWrap>
                </SignupBox>
            </div>
            <FormButton onClick={onSubmitButton} disabled={notAllow}>
                ????????????
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

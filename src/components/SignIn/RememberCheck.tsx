import React from "react";
import styled from "styled-components";
//antd
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import "antd/dist/antd.min.css"; // or 'antd/dist/antd.less'

const RememberCheck: React.FC = () => {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <CheckLabel>
            <Checkbox onChange={onChange} style={{ marginTop: "1rem" }}>
                로그인 유지 하기
            </Checkbox>
        </CheckLabel>
    );
};

export default RememberCheck;

const CheckLabel = styled.label`
    margin: 50px;
    font-size: 0.8rem;
`;

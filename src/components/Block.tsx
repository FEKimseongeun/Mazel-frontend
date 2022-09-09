import React, { ReactNode } from "react";
import styled from "styled-components";

export const Bar = styled.div`
    display: flex;
    flex-direction: column;
    background: #fafaf6;
    border-radius: 12px;
    border: none;
    padding: 20px;
`;

interface Props {
    children?: ReactNode;
    // any props that come into the component
}

const Block = ({ children }: Props) => {
    return <Bar>{children}</Bar>;
};

export default Block;

import Rating from "@material-ui/lab/Rating";
import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import axios from "axios";
ReactModal.setAppElement("#root");

function RecommandCard(props: any) {
    return (
        <div style={{ display: "flex", margin: "20px 0px" }}>
            <Rating name="read-only-stars" value={2.8} precision={0.1} size="small" readOnly />
        </div>
    );
}
export default RecommandCard;

const DrinkName = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin: 10px 0px;
`;

const DrinkImg = styled.img`
    position: relative;
    left: 10%;
    width: 288px;
    height: 288px;
`;
const DrinkInfo = styled.p`
    width: 375px;
    font-size: 16px;
    color: #777777;
`;
const DrinkTopContents = styled.div`
    width: 291px;
`;

const DrinkContents = styled.div`
    display: flex;
    justify-content: space-around;
    width: 238px;
    height: 180px;
    margin-left: 50px;
    margin-top: 30px;
`;

const ContensColumn = styled.div``;

const ContentsText = styled.div`
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #a8a8a8;
`;

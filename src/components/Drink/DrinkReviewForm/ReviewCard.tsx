import React from "react";
import { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";
import axios from "axios";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface drinkReviewState {
    nickname: string;
    comment: string;
    description: string;
    score: number;
    like_cnt: number;
}

const ReviewCard = (props: any) => {
    const [reviewItems, setReviewItems] = useState<drinkReviewState>();
    const [heart, setHeart] = useState(0);

    // useEffect(() => {
    //     axios.get(`http://mazle.ml/drink/review/${props.drink_id}`, { withCredentials: true }).then((res) => {
    //         // const jsondata = JSON.parse(JSON.stringify(res.data));
    //         // console.log(jsondata);
    //         // console.log(jsondata.data);
    //         console.log(res.data.data);
    //         setReviewItems(res.data.data);
    //     });
    // }, []);

    const handleHeart = () => {
        if (heart == 0) setHeart(1);
        else if (heart == 1) setHeart(0);
    };

    return (
        <div style={{ width: "380px", marginLeft: "95px" }}>
            <div style={{ display: "flex", margin: "20px 0px" }}>
                <Rating name="read-only-stars" value={props.score} precision={0.1} size="small" readOnly />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <div>
                    <DrinkInfo style={{ fontSize: "12px", fontWeight: "bold", width: "100%" }}>
                        {props.nickname}
                    </DrinkInfo>
                    <DrinkInfo style={{ fontSize: "12px", width: "100%" }}>{props.comment}</DrinkInfo>
                </div>
                {heart == 0 ? (
                    <AiOutlineHeart size={20} color="#fb5c00" onClick={handleHeart} />
                ) : (
                    <AiFillHeart size={20} color="#fb5c00" onClick={handleHeart} />
                )}
            </div>
        </div>
    );
};

export default ReviewCard;

const DrinkName = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin: 10px 0px;
`;

const DrinkImg = styled.div`
    width: 288px;
    height: 288px;
    margin-left: 50px;
`;
const DrinkInfo = styled.div`
    width: 100%;
    font-size: 16px;
    color: #777777;
`;
const DrinkTopContents = styled.div`
    width: 390px;
`;

const DrinkContents = styled.div`
    display: flex;
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

const ContentsData = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
`;

const DefaultText = styled.div`
    color: #fb5c00;
`;

const ReactionBadge = styled.div``;

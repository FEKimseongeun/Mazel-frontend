import React from "react";
import styled from "styled-components";
import image27 from "../assets/images/image27.png";
import eye from "../assets/images/eye.png";
import heart from "../assets/images/heart_18.png";

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
`;

const RecipeImg = styled.img`
    width: 200px;
    /* height: 450px; */
    max-height: 450px;
    border-radius: 12px;
`;

const PostInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 60%;
    font-size: 12px;
    color: #a8a8a8;
    margin-top: 13px;
    align-items: flex-start;
`;

const PostItem = styled.div`
    display: flex;
    margin-right: 16px;
    align-items: center;
`;

const PostImgContainer = ({ recipeInfo }: any) => {
    return (
        <ImgContainer>
            <RecipeImg
                src={
                    recipeInfo.img && recipeInfo.img !== ""
                        ? `data:image/jpeg;base64,${window.btoa(recipeInfo.img)}`
                        : image27
                }
            />
            <PostInfo>
                <PostItem>
                    <img src={heart} />
                    {recipeInfo.like_cnt}
                </PostItem>
                <PostItem>
                    <img src={eye} />
                    100
                </PostItem>
            </PostInfo>
        </ImgContainer>
    );
};

export default PostImgContainer;

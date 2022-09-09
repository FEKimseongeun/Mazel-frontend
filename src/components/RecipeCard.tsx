import React from "react";
import styled from "styled-components";
import img27 from "../assets/images/image27.png";
import heaert18 from "../assets/images/heart_18.png";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    display: flex;
    width: 282px;
    height: 338px;
    flex-direction: column;
    border-radius: 12px;
    border: solid 1px #f5f5f5;
    margin: 12px;

    &:hover {
        cursor: pointer;
    }
`;

const CardImg = styled.img`
    display: flex;
    width: 282px;
    border-radius: 12px 12px 0 0;
`;

const Name = styled.div``;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12px;
    width: 258px;
    font-size: 16px;
    text-decoration: none;
    color: black;
`;

const TagWrapper = styled.div`
    display: flex;
`;

const Tag = styled.span`
    display: flex;
    flex-direction: column;
    margin: 5px;
`;

const HeartWrapper = styled.div`
    box-sizing: border-box;
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
`;

const Heart = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 18px;
        height: 18px;
    }
`;

const RecipeCard = ({ recipe }: any) => {
    return (
        <CardContainer>
            <Link to={`/recipe/${recipe.recipe_id}`} style={{ textDecoration: "none" }}>
                <CardImg
                    src={recipe.img && recipe.img !== "" ? `data:image/jpeg;base64,${window.btoa(recipe.img)}` : img27}
                />
                <Info>
                    <Name>{recipe.recipe_name}</Name>
                    <HeartWrapper>
                        <TagWrapper>
                            {recipe.tag.length > 0 && recipe.tag.map((tag: any) => <Tag>#{tag}</Tag>)}
                        </TagWrapper>
                        <Heart>
                            <img src={heaert18} />
                            <span>{recipe.like_cnt}</span>
                        </Heart>
                    </HeartWrapper>
                </Info>
            </Link>
        </CardContainer>
    );
};

export default RecipeCard;

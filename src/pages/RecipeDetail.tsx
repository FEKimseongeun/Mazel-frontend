import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getRecipeDetail } from "../apis/recipe";
import PostImgContainer from "../components/PostImgContainer";
import PostInfoContainer from "../components/PostInfoContainer";

const DetailContainer = styled.div`
    display: flex;
    margin: 20px;
`;

const RecipeDetail = () => {
    const [recipeInfo, setRecipeInfo] = useState(null);
    const params = useParams();

    useEffect(() => {
        getRecipeDetail(
            { id: params["*"] },
            (res: any) => {
                setRecipeInfo(res.data);
                console.log(res.data);
            },
            () => {
                alert("오류가 발생했습니다.");
            },
        );
    }, []);

    return (
        <>
            {recipeInfo !== null && (
                <DetailContainer>
                    <PostImgContainer recipeInfo={recipeInfo} />
                    <PostInfoContainer recipeInfo={recipeInfo} />
                </DetailContainer>
            )}
        </>
    );
};

export default RecipeDetail;

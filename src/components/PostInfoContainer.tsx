import React from "react";
import styled from "styled-components";
import Block from "./Block";
import star_empty from "../assets/images/star_empty.png";
import star_filled from "../assets/images/star_filled.png";

type ObjType = {
    [index: string]: string;
    soju: string;
    beer: string;
    paper: string;
    drink: string;
};

export const MEASURE_STANDARD: ObjType = {
    soju: "소주잔",
    beer: "맥주잔",
    paper: "종이컵",
    drink: "음료 기준",
};

const PostInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-left: 50px;
`;

const ChapterTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    display: flex;
    width: 100px;
    margin-bottom: 10px;
`;

export const ChapterTitleSmall = styled.span`
    font-size: 14px;
    margin-bottom: 5px;
    margin-right: 0px;
    min-width: 60px;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
`;

const RecipeInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const TitleWrapper = styled.div`
    display: flex;
    margin: 0;
`;

const InfoBox = styled.div`
    display: flex;
    margin: 30px 30px 30px 0;
    flex-wrap: wrap;
`;

const LineInfoBox = styled(InfoBox)`
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    margin: 0;
    padding: 30px 30px 30px 0;
`;

const StepBox = styled.div`
    display: flex;
    flex-direction: column;
    div,
    span {
        margin-bottom: 8px;
    }
`;

export const StepNum = styled.div`
    display: flex;
    background: #fff8f3;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`;

export const RatingWrapper = styled.div`
    display: flex;
    margin-right: 20px;
    img {
        width: 14px;
        height: 14px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const Tag = styled.div`
    display: flex;
    background: #f5f5f5;
    border-radius: 50px;
    padding: 6px 12px 6px 12px;
    margin: 5px 8px 0 0;
`;

export const RowGrid = styled.div`
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
`;

const ColumnGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

const PostInfoContainer = ({ recipeInfo }: any) => {
    console.log(recipeInfo);
    return (
        <PostInfoWrapper>
            <TitleWrapper>
                <h1>{recipeInfo.recipe_name}</h1>
            </TitleWrapper>
            <RecipeInfoWrapper>
                <LineInfoBox>
                    <ChapterTitleSmall>난이도</ChapterTitleSmall>
                    <RatingWrapper>
                        {[...Array(recipeInfo.diff_score)].map((n, idx) => (
                            <img src={star_filled} />
                        ))}
                        {[...Array(5 - recipeInfo.diff_score)].map((n, idx) => (
                            <img src={star_empty} />
                        ))}
                    </RatingWrapper>
                    <ChapterTitleSmall>가성비</ChapterTitleSmall>
                    <RatingWrapper>
                        {[...Array(recipeInfo.price_score)].map((n, idx) => (
                            <img src={star_filled} />
                        ))}
                        {[...Array(5 - recipeInfo.price_score)].map((n, idx) => (
                            <img src={star_empty} />
                        ))}
                    </RatingWrapper>
                    {recipeInfo.alcohol_score != 0 && recipeInfo.alcohol_score && (
                        <>
                            <ChapterTitleSmall>단맛 정도</ChapterTitleSmall>
                            <RatingWrapper>
                                {[...Array(recipeInfo.sweet_score)].map((n, idx) => (
                                    <img src={star_filled} />
                                ))}
                                {[...Array(5 - recipeInfo.sweet_score)].map((n, idx) => (
                                    <img src={star_empty} />
                                ))}
                            </RatingWrapper>
                            <ChapterTitleSmall>알콜정도</ChapterTitleSmall>
                            <RatingWrapper>
                                {[...Array(recipeInfo.alcohol_score)].map((n, idx) => (
                                    <img src={star_filled} />
                                ))}
                                {[...Array(5 - recipeInfo.alcohol_score)].map((n, idx) => (
                                    <img src={star_empty} />
                                ))}
                            </RatingWrapper>
                        </>
                    )}
                </LineInfoBox>
                <InfoBox>
                    <ChapterTitle>메인 음료</ChapterTitle>
                    <Info>
                        {recipeInfo.main_meterial_list.length > 0 &&
                            recipeInfo.main_meterial_list.map((meterial: any): any => (
                                <span>{JSON.stringify(meterial.drink_name).replaceAll('"', "")} </span>
                            ))}
                    </Info>
                </InfoBox>
                <InfoBox>
                    <ChapterTitle>부가 재료</ChapterTitle>
                    <Info>
                        {recipeInfo.sub_meterial_list.length > 0 &&
                            recipeInfo.sub_meterial_list.map((meterial: any): any => (
                                <span>{JSON.stringify(meterial.drink_name)}</span>
                            ))}
                    </Info>
                </InfoBox>
                <InfoBox>
                    <ChapterTitle>총 가격</ChapterTitle>
                    <Info>{recipeInfo.price}원</Info>
                </InfoBox>
                <InfoBox>
                    <ChapterTitle>계량 기준</ChapterTitle>
                    <Info>{MEASURE_STANDARD[recipeInfo.measure_standard]}</Info>
                </InfoBox>
                <InfoBox>
                    <ChapterTitle>만드는 법</ChapterTitle>
                    <StepBox>
                        {recipeInfo.description.map((desc: string, index: number) => (
                            <Info>
                                <StepNum>{index + 1}</StepNum>
                                <span>{desc}</span>
                            </Info>
                        ))}
                    </StepBox>
                </InfoBox>
                <Block>
                    <div>
                        <b>추가 tip!</b>
                    </div>
                    <br />
                    <div>{recipeInfo.tip}</div>
                </Block>
                <LineInfoBox>
                    <ColumnGrid>
                        <RowGrid>
                            <div>{recipeInfo.nickname}</div>
                        </RowGrid>
                        <RowGrid>
                            {recipeInfo.tag.length > 0 &&
                                recipeInfo.tag.map((val: any): any => (
                                    <Tag>#{JSON.stringify(val).replaceAll('"', "")}</Tag>
                                ))}
                        </RowGrid>
                    </ColumnGrid>
                </LineInfoBox>
            </RecipeInfoWrapper>
        </PostInfoWrapper>
    );
};

export default PostInfoContainer;

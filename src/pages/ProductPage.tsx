import Rating from "@material-ui/lab/Rating";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";

import DrinkReviewForm from "../components/Drink/DrinkReviewForm/DrinkReviewForm";
import sampleImg from "../assets/images/sampleImg.png";
import ReviewCard from "../components/Drink/DrinkReviewForm/ReviewCard";

ReactModal.setAppElement("#root");
interface drinkReviewState {
    nickname: string;
    comment: string;
    description: string;
    score: number;
    like_cnt: number;
}
function ProductModal(props: any) {
    const [reviewItems, setReviewItems] = useState<drinkReviewState[]>([]);

    const handleClickCancel = () => {
        props.onCancel();
    };

    useEffect(() => {
        axios.get(`http://13.125.182.32/drink/review/${props.drink_id}`, { withCredentials: true }).then((res) => {
            // const jsondata = JSON.parse(JSON.stringify(res.data));
            // console.log(jsondata);
            // console.log(jsondata.data);
            console.log(res.data.data);
            setReviewItems(res.data.data);
        });
    }, []);

    return (
        <ModalStyleContainer>
            <ReactModal
                isOpen={props.isOpen}
                style={{
                    overlay: {
                        position: "fixed",
                        zIndex: 4,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0, 0.75)",
                    },
                    content: {
                        top: "28%",
                        left: "50%",
                        width: "75%",
                        height: "700px",
                        transform: "translate(-48%, -25%)",
                    },
                }}
            >
                <ModalContainer>
                    <div style={{ display: "flex" }}>
                        <FlexBoxLeft>
                            <DrinkTopContents>
                                <DrinkName>{props.name}</DrinkName>
                                <DrinkImg>
                                    <img src={props.img} />
                                </DrinkImg>
                                <DrinkInfo>{props.description}</DrinkInfo>
                            </DrinkTopContents>
                            <DrinkContents>
                                <ContensColumn>
                                    <ContentsText>용량</ContentsText>
                                    <ContentsText>가격</ContentsText>
                                    <ContentsText>제조사</ContentsText>
                                    <ContentsText>칼로리</ContentsText>
                                    <ContentsText>분류</ContentsText>
                                </ContensColumn>
                                <ContensColumn>
                                    <ContentsData>{props.measure}ml</ContentsData>
                                    <ContentsData>{props.price}원</ContentsData>
                                    <ContentsData>{props.manufacture}</ContentsData>
                                    <ContentsData>{props.calorie}Kcal</ContentsData>
                                    <ContentsData>
                                        {props.large_category} | {props.medium_category} | {props.small_category}
                                    </ContentsData>
                                </ContensColumn>
                            </DrinkContents>
                            <DefaultText>*가격은 매장마다 상이할 수 있습니다.</DefaultText>
                        </FlexBoxLeft>
                        <FlexBoxRight>
                            <DrinkTopContents>
                                <DrinkName>마즐러 리뷰</DrinkName>
                                <VStack spacing="5px" w="291px">
                                    <ReviewCard
                                        drink_id={props.drink_id}
                                        score="4.5"
                                        nickname="성은"
                                        comment="이거 왕 맛있음"
                                    />
                                    <ReviewCard
                                        drink_id={props.drink_id}
                                        score="4.0"
                                        nickname="다영"
                                        comment="칠성이 더 쎈 느낌"
                                    />
                                </VStack>
                            </DrinkTopContents>
                            <DrinkReviewForm drink_id={props.drink_id} />
                            <ReactionBadge></ReactionBadge>
                        </FlexBoxRight>
                        <div>
                            <button onClick={handleClickCancel} style={{ border: "none", background: "none" }}>
                                <IoCloseSharp />
                            </button>
                        </div>
                    </div>
                </ModalContainer>
            </ReactModal>
        </ModalStyleContainer>
    );
}

export default ProductModal;

const ModalStyleContainer = styled.div``;

const ModalContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
`;

const FlexBoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
    padding-right: 120px;
    border-right: 1px solid black;
`;

const FlexBoxRight = styled.div`
    padding: 100px 50px;
`;

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

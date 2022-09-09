import React, { useEffect, useState } from "react";
import { Box, Flex, Tabs, TabList, Grid, Button, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SliderSection from "../components/Home/SliderSection";
import homeBanner1 from "../assets/images/home_banner_sample.png";
import homeBanner2 from "../assets/images/home_banner_sample1.png";
import homeBanner3 from "../assets/images/home_banner_sample2.png";
import Posts from "../components/Home/Posts";
import axios from "axios";
import CardCarousel from "../components/Home/Carousel/CardCarousel";
import RecommendDrink from "../components/Home/RecommendDrink";

const image = [
    { recommandImgUrl: `${homeBanner1}` },
    { recommandImgUrl: `${homeBanner2}` },
    { recommandImgUrl: `${homeBanner3}` },
];

interface BannerState {
    recommandImgUrl: string;
}

interface PopularState {
    recipe_id: number;
    nickname?: string | null;
    recipe_name: string;
    img: string;
    price: number;
    tag: string;
    like_cnt: number;
}

interface RecommandState {
    recipe_id: number;
    recipe_name: string;
    total_score: number;
    img: string;
}

type RecommandCard = {
    recommand: RecommandState;
};

const HomeContainer = () => {
    const [bannerSection, setBannerSection] = useState<BannerState[]>(image);
    const [postData, setPostData] = useState<PopularState[]>([]);
    const [recommand, setRecommand] = useState<RecommandState[]>([]);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        console.log(token);
        // 여기서 열어준다
        axios
            .get(`http://13.125.182.32/home/hot-recipe/`)
            .then((res) => {
                const popularRes = res.data.data;

                setPostData(popularRes);
            })
            .catch((err) => console.log(err));
        // axios
        //     .all([axios.get(`http://mazle.ml/home/hot-recipe/`), axios.get(`http://mazle.ml/home/recipe-type/`)])
        //     .then(
        //         axios.spread((res1, res2) => {
        //             const popularRes = res1.data.data;
        //             const recommandRes = res2.data.data;

        //             setPostData(popularRes);
        //             setRecommand(recommandRes);
        //         }),
        //     )
        //     .catch((err) => console.log(err));
    }, []);
    //테스트용
    // useEffect(() => {

    //     setRecommand(recommand);
    // }, []);
    return (
        <div style={{ width: "1240px" }}>
            <HomeMainContainer>
                <HomeMainTitle>오늘도 맛있는 한 모금, 마즐!</HomeMainTitle>
                <HomeMainSubTitle>마즐에서 마시는 즐거움을 느껴보세요 :)</HomeMainSubTitle>
            </HomeMainContainer>
            <SliderContainer>
                <SliderSection recommandItems={bannerSection} />
            </SliderContainer>
            <VStack spacing="60px">
                <Box mt={20}>
                    <Box>
                        <Heading mb={5} style={{ fontSize: "28px" }}>
                            지금 뜨는 인기 조합 레시피
                        </Heading>
                        <Grid
                            p={3}
                            templateColumns="repeat(auto-fit, minmax(270px, 1fr))"
                            placeItems="center"
                            placeContent="center"
                        >
                            {postData.map((item) => {
                                return (
                                    <Posts
                                        nickname={item.nickname}
                                        recipe_id={item.recipe_id}
                                        recipe_name={item.recipe_name}
                                        like_cnt={item.like_cnt}
                                        price={item.price}
                                        tag={item.tag}
                                        img={item.img}
                                    />
                                );
                            })}
                        </Grid>
                        <Link to="/recipe">
                            <Button
                                colorScheme="gray"
                                variant="outline"
                                w="346px"
                                h="52px"
                                borderRadius="100px"
                                fontSize="12px"
                                mx="450px"
                            >
                                더 많은 조합 레시피
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Heading style={{ fontSize: "28px" }}>오늘은 이 음료 어떠세요?</Heading>
                        <CardCarousel />
                    </Box>
                </Box>
                <HotDrinkReview>
                    <Box>
                        <Heading mb={5} style={{ fontSize: "28px" }}>
                            제가 마셔봤는데요
                        </Heading>
                        <RecommendDrink />
                    </Box>
                </HotDrinkReview>
            </VStack>
        </div>
    );
};

export default HomeContainer;

const HomeMainContainer = styled.div`
    font-family: "SUIT-Variable";
    padding: 2% 0% 4% 29%;
    width: 1920px;
    height: 160px;
    background-color: #fafaf6;
    transform: translate(-18%);
`;

const HomeMainTitle = styled.div`
    font-size: 2rem;
    font-weight: 900;
`;

const HomeMainSubTitle = styled.div`
    margin-top: 10px;
    font-size: 1.1rem;
`;

const SliderContainer = styled.div``;

const PopularRecipe = styled.div`
    width: 1240px;
    height: 860px;
`;

const RecommandRecipe = styled.div`
    width: 1240px;
    height: 860px;
`;

const HotDrinkReview = styled.div`
    width: 1240px;
    height: 860px;
`;

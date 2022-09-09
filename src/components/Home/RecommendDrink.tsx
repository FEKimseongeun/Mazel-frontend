import React, { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, Grid } from "@chakra-ui/react";
import axios from "axios";
import DrinkReviewCard from "./DrinkReviewCard";
import { badReviewList } from "./HomeDataDummy";

interface ReviewState {
    comment_id: number;
    drink_name: string;
    comment: string;
    img: string;
    score: number;
}

const RecommendDrink = () => {
    const [hotReviewList, setHotReviewList] = useState<ReviewState[]>([]);
    const [badReview, setBadReview] = useState<ReviewState[]>(badReviewList);

    useEffect(() => {
        axios
            .get("http://13.125.182.32/home/hot-review/")
            .then((res) => {
                setHotReviewList(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Tabs defaultIndex={0} variant="enclosed">
            <TabList>
                <Tab
                    bg="gray.200"
                    borderTopRadius="md"
                    w="130px"
                    _selected={{
                        bg: "white",
                        borderX: "1px",
                        borderY: "1px",
                        borderColor: "gray.200",
                        borderBottomColor: "white",
                    }}
                    fontWeight={900}
                >
                    추천해요
                </Tab>
                <Tab
                    bg="gray.200"
                    borderTopRadius="md"
                    w="130px"
                    _selected={{
                        bg: "white",
                        borderX: "1px",
                        borderTop: "1px",
                        borderColor: "gray.200",
                        borderBottomColor: "white",
                    }}
                    fontWeight={900}
                >
                    별로에요
                </Tab>
            </TabList>
            <TabPanels borderX="1px" borderBottom="1px" borderColor="gray.200">
                <TabPanel>
                    <Grid
                        p={3}
                        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                        placeItems="center"
                        placeContent="center"
                    >
                        {hotReviewList.map((product) => (
                            <DrinkReviewCard product={product} />
                        ))}
                    </Grid>
                </TabPanel>
                <TabPanel>
                    {/* <Grid
                        p={3}
                        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                        placeItems="center"
                        placeContent="center"
                    >
                        {badReviewList?.map((product) => (
                            <DrinkReviewCard product={product} />
                        ))}
                    </Grid> */}
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default RecommendDrink;

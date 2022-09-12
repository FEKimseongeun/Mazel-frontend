import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Tabs, TabList, TabPanels, Tab, TabPanel, WrapItem, Avatar, Flex, Box } from "@chakra-ui/react";
import MyRecipe from "../components/MyPage/MyRecipe";

const MyContainer = () => {
    const handleMyRecipe = () => {
        const token = sessionStorage.getItem("token");
        console.log(token);
        // 여기서 열어준다
        axios
            .get(`http://13.125.182.32/users/mypage/recipe/`, {
                headers: { token: `${token}` },
            })
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <div>
            <Tabs variant="unstyled" w="1235px">
                <ProfileContainer>
                    <Flex>
                        <WrapItem>
                            <Avatar w="123px" h="123px" name="Christian Nwamba" src="https://bit.ly/code-beast" />{" "}
                        </WrapItem>
                        <Flex flexDirection="column" mt="15px">
                            <ProfileName>MAZLER LEE</ProfileName>
                            <TabList h="33px" mx={3} mt="20px">
                                <Tab _selected={{ borderBottom: "3px solid #FB5C00" }} onClick={handleMyRecipe}>
                                    작성한 레시피
                                </Tab>
                                <Tab _selected={{ borderBottom: "3px solid #FB5C00" }}>작성한 리뷰</Tab>
                                <Tab _selected={{ borderBottom: "3px solid #FB5C00" }}>저장한 레시피</Tab>
                                <Tab _selected={{ borderBottom: "3px solid #FB5C00" }}>개인정보 수정</Tab>
                            </TabList>
                        </Flex>
                    </Flex>
                </ProfileContainer>
                <Flex border="1px solid lightgray" h="100%" mb={5} borderRadius={8}>
                    <TabPanels mt={8}>
                        <TabPanel>
                            <Box>
                                <MyRecipe />
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Flex>
            </Tabs>
        </div>
    );
};

export default MyContainer;

const ProfileContainer = styled.div`
    margin-left: 50px;
    margin-bottom: 35px;
`;

const ProfileName = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin-left: 22px;
`;

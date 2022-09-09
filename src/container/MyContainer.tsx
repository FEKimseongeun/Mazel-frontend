import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Tabs, TabList, TabPanels, Tab, TabPanel, WrapItem, Avatar, Flex } from "@chakra-ui/react";

const MyContainer = () => {
    return (
        <div>
            <Tabs variant="unstyled">
                <ProfileContainer>
                    <Flex>
                        <WrapItem>
                            <Avatar w="123px" h="123px" name="Christian Nwamba" src="https://bit.ly/code-beast" />{" "}
                        </WrapItem>
                        <Flex flexDirection="column" mt="15px">
                            <ProfileName>MAZLER LEE</ProfileName>
                            <TabList h="33px" mx={3} mt="30px">
                                <Tab _selected={{ borderBottom: "3px solid #FB5C00" }}>작성한 레시피</Tab>
                                <Tab _selected={{ borderBottom: "3px solid #FB5C00" }}>작성한 리뷰</Tab>
                                <Tab _selected={{ borderBottom: "3px solid #FB5C00" }}>저장한 레시피</Tab>
                                <Tab _selected={{ borderBottom: "3px solid #FB5C00" }}>개인정보 수정</Tab>
                            </TabList>
                        </Flex>
                    </Flex>
                </ProfileContainer>

                <TabPanels mt={8}>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default MyContainer;

const ProfileContainer = styled.div``;

const ProfileName = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin-left: 22px;
`;

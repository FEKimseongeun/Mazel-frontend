import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from "react-grid-carousel";
import axios from "axios";

import sodaCategory from "../../../assets/images/soda_category.png";

const MyDot = ({ isActive }) => (
    <span
        style={{
            display: "inline-block",
            height: isActive ? "8px" : "5px",
            width: isActive ? "8px" : "5px",
            background: "#1890ff",
        }}
    ></span>
);

const imgArray = [];
export default function CardCarousel() {
    const [recommandData, setRecommandData] = useState([]);

    // const deUrl = window.btoa(props.img);
    // const imgUrl = `data:image/png;base64,${deUrl}`;
    let deUrl;
    useEffect(() => {
        axios.get(`http://13.125.182.32/home/hot-drink/`).then((res) => {
            setRecommandData(res.data.data);
            for (let i = 0; i < recommandData.length; i++) {
                deUrl = window.btoa(recommandData[i].img);
                imgArray[i] = `data:image/png;base64,${deUrl}`;
            }
        });
    }, []);
    return (
        <Container>
            <Flex>
                <Box style={{ width: "384px", height: "239px", marginTop: "50px" }}>
                    <img src={sodaCategory} style={{ width: "384px", height: "239px", objectFit: "cover" }} />
                </Box>
                <Row>
                    <Carousel
                        cols={4}
                        rows={1}
                        gap={8}
                        responsiveLayout={[
                            {
                                breakpoint: 1200,
                                cols: 3,
                            },
                            {
                                breakpoint: 1200,
                                cols: 3,
                            },
                        ]}
                        arrowRight={<ArrowBtn type="right" />}
                        arrowLeft={<ArrowBtn type="left" />}
                    >
                        {recommandData.map((item, i) => (
                            <Carousel.Item key={i}>
                                <Card>
                                    <TextBox>{item.drink_name}</TextBox>
                                    <Img img={imgArray[i]} />

                                    <Star>♥ {item.like_cnt}</Star>
                                    {/* <Text>좋아요</Text> */}
                                </Card>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Row>
            </Flex>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100%;
`;

const Row = styled.div`
    max-width: 900px;
    padding: 0 50px;
    margin: 50px auto;
`;

const ArrowBtn = styled.span`
    display: inline-block;
    position: absolute;
    z-index: 1;
    top: 45%;
    right: ${({ type }) => (type === "right" ? "0px" : "unset")};
    left: ${({ type }) => (type === "left" ? "0px" : "unset")};
    width: 45px;
    height: 45px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);

    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: ${({ type }) =>
            type === "right" ? "translate(-75%, -50%) rotate(45deg)" : "translate(-25%, -50%) rotate(-135deg)"};
        width: 10px;
        height: 10px;
        border-top: 2px solid #666;
        border-right: 2px solid #666;
    }
    &:hover::after {
        border-color: #333;
    }
`;
const TextBox = styled.div`
    width: 180px;
    color: white;
    position: absolute;
    top: 0;
    z-index: 1;
    padding: 1rem;
    opacity: 0;
`;

const Card = styled.div`
    width: 180px;
    height: 240px;
    margin: 2px;
    border-radius: 6px;
    border: 1px solid #eaeaea;
    overflow: hidden;
    cursor: pointer;
    transition: box-shadow 0.25s;

    &:hover ${TextBox} {
        opacity: 1;
    }
    &:hover {
        box-shadow: 0 0 8px 0 #00000063;
    }
`;

const Img = styled.div`
    height: 180px;
    margin-bottom: 4px;
    background-image: ${({ img }) => `url(${img})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &::before {
        content: "";
        display: block;
        position: absolute;
        height: 0%;
        width: 180px;
        top: 0;
        z-index: 0;
        transition: height 0.5s ease-out;
        background: linear-gradient(to top, transparent 20%, black 100%);
        border-radius: 6px;
    }

    &:hover::before {
        height: 80%;
    }
`;

const Star = styled.div`
    float: left;
    margin: 10px 10px;
    color: #fb5c00;
    font-size: 18px;
    font-weight: bold;
`;

import React, { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReactModal from "react-modal";
import { Box, Badge, Avatar, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
// import { modaldata } from './ModalDummyData';

// import MyModal from "./MyModal";
// import useModals from "./useModals.js";

interface HotReviewState {
    comment_id: number;
    drink_name: string;
    comment: string;
    img: string;
    score: number;
}

type HotReviewProps = {
    product: HotReviewState;
};

ReactModal.setAppElement("#root");

const DrinkReviewCard = ({ product }: HotReviewProps) => {
    // const binaryData  =[];
    const deUrl = window.btoa(product.img);
    const imgUrl = `data:image/png;base64,${deUrl}`;
    return (
        <>
            <Box
                w="368px"
                h="102px"
                borderWidth="1px"
                borderRadius="lg"
                mb={3}
                _hover={{ boxShadow: "0 0 8px 0 #00000063", transition: "box-shadow 0.25s" }}
            >
                <Box display="flex" alignItems="center">
                    <img src={imgUrl} style={{ width: "78px", margin: "10px" }} />
                    <Box display="flex" alignItems="baseline" flexDirection="column" ml={2}>
                        <Box display="flex">
                            <Rating
                                name="read-only-stars"
                                value={product.score}
                                precision={0.1}
                                size="small"
                                readOnly
                            />
                        </Box>
                        <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
                            {product.drink_name}
                        </Box>
                        <CommentText>{product.comment}</CommentText>

                        {/* <Badge borderRadius="full" px="2" bg="#FB5C00" color="#ffffff">
                                {Array(1)
                                    .fill(" ")
                                    .map((_) => props.tag)}
                            </Badge> */}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default DrinkReviewCard;

const CommentText = styled.div`
    font-size: 12px;
    color: #777777;
`;

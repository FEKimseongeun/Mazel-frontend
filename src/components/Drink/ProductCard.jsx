import { Box, Image, Flex, Link, Text, Button, LinkBox, LinkOverlay, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { GlobalContext } from "./context/GlobalState";
import NoFillHeart from "../../assets/images/notFillIcon.png";
import BsFillHeartFill from "../../assets/images/fillIcon.png";
import styled from "styled-components";
import ProductModal from "../../pages/ProductPage";
import axios from "axios";
import { getDrinkInfo, getDrinkReview } from "../../apis/drink";

const ProductCard = ({ product }) => {
    const [isOpen, setOpen] = useState(false);
    const [dummyData, setDummyData] = useState([]);
    const [isLike, setIsLike] = useState(false);

    const deUrl = window.btoa(product.img);
    const imgUrl = `data:image/png;base64,${deUrl}`;

    const handleClick = async () => {
        await axios
            .all([getDrinkInfo(product.drink_id), getDrinkReview(product.drink_id)]) // axios.all로 여러 개의 request를 보내고
            .then(
                axios.spread((drinkInfoResp, drinkReviewResp) => {
                    // response를 spread로 받는다
                    console.log(drinkInfoResp.data, drinkReviewResp.data);
                }),
            )
            .catch((error) => {
                console.error(error);
            });

        setOpen(true);
    };

    const handleModalSubmit = () => setOpen(false);
    const handleModalCancel = () => setOpen(false);
    return (
        <>
            <Flex
                boxShadow="xl"
                mb={8}
                m={3}
                as={LinkBox}
                style={{ borderRadius: "10px" }}
                className="product-card"
                w="200px"
                h="350px"
                maxW="240px"
                transition="all 0.2s ease"
            >
                <Box>
                    <Flex
                        style={{
                            width: "200px",
                            borderRadius: "10px",
                            backgroundImage:
                                "linear-gradient(to top, rgba(232, 232, 232, 0.1) 80%, rgba(20, 20, 20, 0.3) 98%)",
                            backgroundSize: "cover",
                            backgroundPosition: "top",
                        }}
                        onClick={handleClick}
                    >
                        <Image
                            src={imgUrl}
                            style={{
                                position: "relative",
                                height: "300px",
                                zIndex: "-2",
                                objectFit: "cover",
                                borderRadius: "10px 10px 0 0",
                            }}
                        />
                        <CoverContent>
                            <Text style={{ fontSize: "18px", color: "white", fontWeight: "900" }}>
                                {product.drink_name}
                            </Text>
                        </CoverContent>
                    </Flex>
                    <Button
                        leftIcon={isLike ? <img src={BsFillHeartFill} /> : <img src={NoFillHeart} />}
                        variant={isLike ? "fill" : "heart"}
                        height={7}
                        minW={7}
                        fontSize="sm"
                        onClick={() => {
                            isLike ? setIsLike(false) : setIsLike(true);
                        }}
                        style={{ position: "absolute", left: "80%", bottom: "20%" }}
                    />
                    <Flex mt={2} align="center" justify="space-between" flexWrap="wrap">
                        <Flex align="center" pl={4} pt={1}>
                            {/* <Rating name="read-only-stars" precision={0.1} size="small" readOnly /> */}
                            <BsFillStarFill style={{ width: "15px", color: "#FB5C00" }} />
                            <Text ml={1} fontSize="md" style={{ fontWeight: "900", color: "#FB5C00" }}>
                                {product.score.toFixed(1)}
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
                <ProductModal
                    isOpen={isOpen}
                    drink_id={product.drink_id}
                    onSubmit={handleModalSubmit}
                    onCancel={handleModalCancel}
                    img={imgUrl}
                />
            </Flex>
        </>
    );
};

export default ProductCard;

const CoverContent = styled.div`
    padding: 10px;
    width: 160%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 0;
    top: 0.5rem;
    left: 5%;
`;

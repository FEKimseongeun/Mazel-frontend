import { Box, Image, Flex, Link, Text, Button, LinkBox, LinkOverlay, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
// import { GlobalContext } from "./context/GlobalState";
import NoFillHeart from "../../assets/images/notFillIcon.png";
import BsFillHeartFill from "../../assets/images/fillIcon.png";
import styled from "styled-components";
import ProductModal from "../../pages/ProductPage";
import { modalDummy } from "../Drink/mockDB/ModalDummyData";
import axios from "axios";

interface ProductType {
    drink_id: number;
    drink_name: string;
    description: string;
    calorie: number;
    manufacture: string;
    price: number;
    large_category: string;
    medium_category: string;
    small_category: string;
    img: Blob;
    alcohol: number;
    measure: number;
    caffeine: number;
}

type Props = {
    product: ProductType;
};

type ModalDataType = {
    drink_name: string;
    img: string;
    description: string | null;
    measure: number;
    price: number;
    manufacture: string;
    calorie: number;
    large_category: string | null;
    medium_category: string | null;
    small_category: string | null;
    alcohol: number;
    caffeine: number;
    tag: string | null;
    like_cnt: number;
};

const HomeCard = ({ product }: Props) => {
    const toast = useToast();
    const [isOpen, setOpen] = useState(false);
    const [dummyData, setDummyData] = useState<ModalDataType>(modalDummy);
    const handleClick = () => {
        // const token = sessionStorage.getItem("token");
        const token =
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImIxYWExZGQ2LTc1M2YtNDEyMi05NmI3LTZmOTMxMTQ4MzA1ZCIsImV4cCI6MTY2MTI1MjE2M30.kpsClXAEjuv9V82DefoOVkxb5wJ338_HVmc9g1BHY2I";

        // const httpInstance = axios.create({
        //     baseURL: "http://mazle.ml",
        //     timeout: 300,
        //     headers: {
        //         "content-type": "application/json;charset=UTF-8",
        //         credentials: true,
        //     },
        //     withCredentials: true,
        // });
        // httpInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
        // try {
        //     httpInstance.get(`/drink/get/50`, { i_drink_id: 50 }).then((response) => {
        //         console.log(response);
        //     });
        // } catch (e) {
        //     console.log(e);
        // }

        // setDummyData(modalDummy);
        // console.log(dummyData);
        // 여기서 열어준다
        // setOpen(true);
    };

    const handleModalSubmit = () => {
        // 모달1 비지니스 로직
        setOpen(false);
    };
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
                h="350px"
                maxW="240px"
                transition="all 0.2s ease"
            >
                <Box>
                    <Flex
                        style={{
                            borderRadius: "10px",
                            backgroundImage:
                                "linear-gradient(to top, rgba(232, 232, 232, 0.1) 80%, rgba(20, 20, 20, 0.3) 98%)",
                            backgroundSize: "cover",
                            backgroundPosition: "top",
                        }}
                        onClick={handleClick}
                    >
                        <Image
                            src={"https://image.g9.co.kr/g/1610867103/n?ts=1640412256000"}
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
                        leftIcon={true ? <img src={BsFillHeartFill} /> : <img src={NoFillHeart} />}
                        variant={true ? "fill" : "heaa"}
                        height={7}
                        minW={7}
                        fontSize="sm"
                        // onClick={() => {
                        //     toast({
                        //         title: product.isSaved
                        //             ? "Product successfully removed from your saved items"
                        //             : "Product successfully added to your saved items",
                        //         status: "success",
                        //         duration: 1500,
                        //         isClosable: true,
                        //     });
                        //     toggleSaved(product.id);
                        // }}
                        style={{ position: "absolute", left: "80%", bottom: "20%" }}
                    />
                    <Flex mt={2} align="center" justify="space-between" flexWrap="wrap">
                        <Flex align="center" pl={4} pt={1}>
                            {/* <Rating name="read-only-stars" precision={0.1} size="small" readOnly /> */}
                            <BsFillStarFill style={{ width: "15px", color: "#FB5C00" }} />
                            <Text ml={1} fontSize="md" style={{ fontWeight: "900", color: "#FB5C00" }}>
                                4.8
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </>
    );
};

export default HomeCard;

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

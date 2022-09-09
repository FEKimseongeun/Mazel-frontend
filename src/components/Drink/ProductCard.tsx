import { Box, Image, Flex, Link, Text, Button, LinkBox, LinkOverlay, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { GlobalContext } from "./context/GlobalState";
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
    img: string;
    alcohol: number;
    measure: number;
    caffeine: number;
    score: number;
}

type Props = {
    product: ProductType;
    className?: string;
};

type ModalDataType = {
    drink_name: string;
    img: string;
    description: string | null;
    measure: number;
    price: number;
    manufacture: string;
    calorie: number;
    large_category?: string | null;
    medium_category?: string | null;
    small_category?: string | null;
    alcohol: number;
    caffeine: number;
    tag?: string | null;
    like_cnt: number;
};

const modalData = {
    drink_name: "칠성사이다",
    description: "반세기 이상의 역사를 지닌 대한민국 No.1 오리지널 탄산음료",
    calorie: 145,
    manufacture: "롯데칠성",
    price: 1400,
    large_category: "논알콜",
    medium_category: "탄산",
    small_category: "사이다",
    img: "",
    alcohol: 0,
    measure: 330,
    caffeine: 0,
    tag: null,
    like_cnt: 0,
};

const ProductCard = ({ product }: Props) => {
    const { addToCart, toggleSaved } = useContext(GlobalContext);
    const toast = useToast();
    const [isOpen, setOpen] = useState(false);
    const [dummyData, setDummyData] = useState<ModalDataType>(modalData);
    const [isLike, setIsLike] = useState(false);

    const deUrl = window.btoa(product.img);
    const imgUrl = `data:image/png;base64,${deUrl}`;
    const handleClick = () => {
        // const token = sessionStorage.getItem("token");

        //     "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE5MmEyODBhLWQ5ZGUtNDU4ZS04NGNlLTdiODBiZDFiODhkYyIsImV4cCI6MTY2MTA4MzQ2OX0.2uJr0DZmc09ucKzutV22kCirvoDxhNUF9JFomA4bQWQ";
        // await axios.get(`http://mazle.ml/drink/get/48`).then((response) => {
        //     console.log(response);
        // });
        axios.defaults.withCredentials = true;
        const token = sessionStorage.getItem("token");
        const drinkId = product.drink_id;
        console.log(token);
        axios
            .get(`http://13.125.182.32/drink/get/${product.drink_id}`, {
                headers: { token: `${token}` },
            })
            .then((response) => {
                console.log(response);
                setDummyData(response.data.data);
            });
        // setDummyData(modalDummy);
        // console.log(dummyData);
        // 여기서 열어준다
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
                            // src={"https://image.g9.co.kr/g/1610867103/n?ts=1640412256000"}
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
                    name={dummyData.drink_name}
                    description={dummyData.description}
                    calorie={dummyData.calorie}
                    manufacture={dummyData.manufacture}
                    price={dummyData.price}
                    large_category={dummyData.large_category}
                    medium_category={dummyData.medium_category}
                    small_category={dummyData.small_category}
                    img={imgUrl}
                    alcohol={dummyData.alcohol}
                    measure={dummyData.measure}
                    caffeine={dummyData.caffeine}
                    like_cnt={dummyData.like_cnt}
                    product={product}
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

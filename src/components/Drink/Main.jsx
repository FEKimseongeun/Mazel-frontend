import { Box, Flex, Tabs, TabList, Tab, Grid, useMediaQuery, Link, Heading } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import loadableVisibility from "react-loadable-visibility/loadable-components";
import LoadingProduct from "./LoadingProduct";
import axios from "axios";

// Lazy load each product and display them when they become visible in the viewport
const ProductCard = loadableVisibility(() => import("./ProductCard"), {
    fallback: <LoadingProduct />,
});

// Give the components chakra props
const Main = () => {
    // const { products, savedItemsCount } = useContext(GlobalContext);
    const [productItems, setProductItems] = useState([]);
    useEffect(() => {
        axios.get("http://13.125.182.32/drink/get/list/", { withCredentials: true }).then((res) => {
            // const jsondata = JSON.parse(JSON.stringify(res.data));
            // console.log(res.data);
            // console.log(jsondata.data);
            setProductItems(res.data);
        });
    }, []);

    return (
        <Box as="main" mx={[0, 4]} h="100%" rounded="md">
            <Flex align="flex-end" justify="space-between" flexWrap="wrap">
                <Flex justify="space-between" align="center" flexWrap="wrap" w="100%">
                    <Heading fontFamily={"SUIT-Variable"} fontSize="28px" fontWeight="bold" ml={2} mb={6} mx={4}>
                        모든 음료(100)
                    </Heading>
                    <Tabs variant="unstyled" size="sm" mb={5}>
                        <TabList>
                            <Tab
                                _selected={{
                                    color: "black",
                                }}
                                fontSize={["xs", "sm"]}
                                color={"gray"}
                            >
                                <li style={{ color: "#FB5C00" }}></li>추천순
                            </Tab>
                            <Tab
                                _selected={{
                                    color: "black",
                                }}
                                fontSize={["xs", "sm"]}
                                color={"gray"}
                            >
                                <li style={{ color: "#FB5C00" }}></li>찜 많은 순
                            </Tab>
                        </TabList>
                    </Tabs>
                </Flex>
            </Flex>
            <Grid
                p={3}
                templateColumns="repeat(auto-fit, minmax(220px, 1fr))"
                placeItems="center"
                placeContent="center"
            >
                {productItems?.map((product) => (
                    <ProductCard product={product} />
                ))}
            </Grid>
        </Box>
    );
};

export default Main;

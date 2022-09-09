import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import { ReactNode } from "react";
import Banner from "./Banner";
import Header from "../Nav/Header";

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props) => {
    return (
        <>
            <Banner />
            <Flex
                direction="column"
                minH="100vh"
                style={{
                    width: "100%",
                    marginTop: "20%",
                    padding: "0% ",
                    fontFamily: "SUIT-Variable",
                }}
            >
                <Flex flex={1} minH="100%">
                    <Box display={["none", "block"]} minH="100%" w="220px" color="gray.600">
                        <Sidebar />
                    </Box>
                    <Box flex={1} py={[0, 9]}>
                        {children}
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};

export default Container;

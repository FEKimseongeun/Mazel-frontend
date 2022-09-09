import { Box, Button, chakra, Flex, Heading, HStack, Text, Link, useDisclosure } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import SearchBar from "./SearchBar";
import logoImg from "../../assets/images/logoimg.png";

// Give the components chakra props

const Header = () => {
    const isLogin = localStorage.getItem("isLogin");
    const hamburgerRef = useRef<SVGSVGElement>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleLogout = () => {
        localStorage.removeItem("isLogin");
        sessionStorage.clear();
        window.location.href = "/";
    };

    return (
        <Flex direction="column" height={["120px", "fit-content"]} w="100%" bg="white" style={{ zIndex: "1" }}>
            <Flex height="65px" px={[null, 2]} py={[7, 9]} justify={["space-between", null]}>
                <Flex align="center">
                    <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }} mr={4}>
                        <Heading w="5rem">
                            <img src={logoImg} />
                        </Heading>
                    </Link>
                    <SearchBar display={["none", "block"]} />
                </Flex>
                <Flex justify="space-between" align="center">
                    <HStack spacing={[3, 5]}>
                        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
                            <Button
                                pr={1}
                                fontSize={"sm"}
                                color="#000000"
                                bg="none"
                                _hover={{
                                    color: "#FB5C00",
                                }}
                                _focus={{ color: "#FB5C00" }}
                            >
                                홈
                            </Button>
                        </Link>
                        <Link as={RouterLink} to="/recipe" _hover={{ textDecoration: "none" }}>
                            <Button
                                pr={1}
                                fontSize={"sm"}
                                color="#000000"
                                bg="none"
                                _hover={{
                                    color: "#FB5C00",
                                }}
                                _focus={{ color: "#FB5C00" }}
                            >
                                조합 레시피
                            </Button>
                        </Link>
                        <Link as={RouterLink} to="/drink" _hover={{ textDecoration: "none" }}>
                            <Button
                                pr={5}
                                fontSize={"sm"}
                                color="#000000"
                                bg="none"
                                _hover={{
                                    color: "#FB5C00",
                                }}
                                _focus={{ color: "#FB5C00" }}
                            >
                                음료냉장고
                            </Button>
                        </Link>
                        <Text style={{ marginRight: "20px" }}>|</Text>
                    </HStack>
                    {isLogin == "1" ? (
                        <HStack spacing={[3, 5]}>
                            <Link as={RouterLink} to="/mypage" _hover={{ textDecoration: "none" }}>
                                <Button
                                    px={5}
                                    fontSize={"sm"}
                                    color="#000000"
                                    bg="none"
                                    _hover={{
                                        color: "#FB5C00",
                                    }}
                                >
                                    마이페이지
                                </Button>
                            </Link>
                            <Button
                                px={5}
                                fontSize={"sm"}
                                color="#000000"
                                bg="none"
                                _hover={{
                                    color: "#FB5C00",
                                }}
                                onClick={handleLogout}
                            >
                                로그아웃
                            </Button>
                        </HStack>
                    ) : (
                        <HStack spacing={[3, 5]}>
                            <Link as={RouterLink} to="/signin" _hover={{ textDecoration: "none" }}>
                                <Button
                                    px={5}
                                    fontSize={"sm"}
                                    color="#000000"
                                    bg="none"
                                    _hover={{
                                        color: "#FB5C00",
                                    }}
                                >
                                    로그인
                                </Button>
                            </Link>
                            <Link as={RouterLink} to="/signup/start" _hover={{ textDecoration: "none" }}>
                                <Button
                                    height={[8, 9]}
                                    minW={[8, 9]}
                                    px={5}
                                    fontSize={"sm"}
                                    variant="outline"
                                    borderColor="#FB5C00"
                                    borderRadius="0.3rem"
                                    color="#FB5C00"
                                    _hover={{
                                        bg: "#FB5C00",
                                        color: "white",
                                    }}
                                >
                                    회원가입
                                </Button>
                            </Link>
                        </HStack>
                    )}
                </Flex>
            </Flex>
            <SearchBar display={["block", "none"]} />
        </Flex>
    );
};

export default Header;

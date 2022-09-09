import {
    Box,
    Flex,
    Heading,
    Link,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";

const Sidebar = () => {
    return (
        <>
            <Heading as="h4" fontFamily={"SUIT-Variable"} fontSize="lg" fontWeight="bold" mb={6} mt={9}>
                필터
            </Heading>
            <Heading
                as="h6"
                fontFamily={"SUIT-Variable"}
                fontSize="md"
                fontWeight="bold"
                p={5}
                bg="#FAFAF6"
                borderRadius="md"
            >
                모든 음료
            </Heading>
            {/* Accordion start */}
            <Accordion allowMultiple fontSize="sm">
                {/* 1st item start */}
                <AccordionItem borderTop={[null, "none"]}>
                    <AccordionButton py={5} borderRadius="md">
                        <Box flex="1" textAlign="left">
                            <Heading fontFamily={"SUIT-Variable"} as="h6" fontSize="sm">
                                논알콜
                            </Heading>
                        </Box>
                        <AccordionIcon mr={1} />
                    </AccordionButton>
                    {/* Children */}
                    <AccordionPanel ml={5}>
                        <Link>주스</Link>
                    </AccordionPanel>
                    <AccordionPanel ml={5}>
                        <Link>탄산</Link>
                    </AccordionPanel>
                    <AccordionPanel ml={5}>
                        <Link>기능성 음료</Link>
                    </AccordionPanel>
                    <AccordionPanel ml={5}>
                        <Link>차/커피</Link>
                    </AccordionPanel>
                    <AccordionPanel ml={5}>
                        <Link>유제품</Link>
                    </AccordionPanel>
                    <AccordionPanel ml={5}>
                        <Link>기타</Link>
                    </AccordionPanel>
                </AccordionItem>
                {/* 1st item end */}
                {/* 2nd item start */}
                <AccordionItem borderTop={[null, "none"]}>
                    <AccordionButton py={5} borderRadius="md">
                        <Box flex="1" textAlign="left">
                            <Heading fontFamily={"SUIT-Variable"} as="h6" fontSize="sm">
                                알콜
                            </Heading>
                        </Box>
                        <AccordionIcon mr={1} />
                    </AccordionButton>
                    {/* Children */}
                    <AccordionPanel ml={5}>
                        <Link>소주</Link>
                    </AccordionPanel>
                    <AccordionPanel ml={5}>
                        <Link>맥주</Link>
                    </AccordionPanel>
                    <AccordionPanel ml={5}>
                        <Link>양주</Link>
                    </AccordionPanel>
                    <AccordionPanel ml={5}>
                        <Link>탁주</Link>
                    </AccordionPanel>
                    <AccordionPanel ml={5}>
                        <Link>과일주</Link>
                    </AccordionPanel>
                    <AccordionPanel ml={5}>
                        <Link>기타</Link>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem borderTop={[null, "none"]}>
                    <AccordionButton py={5} borderRadius="md">
                        <Box flex="1" textAlign="left">
                            <Heading fontFamily={"SUIT-Variable"} as="h6" fontSize="sm">
                                가격
                            </Heading>
                        </Box>
                        <AccordionIcon mr={1} />
                    </AccordionButton>
                    {/* Children */}
                    <AccordionPanel ml={5}>
                        <Link>500원~1000원</Link>
                    </AccordionPanel>
                    <AccordionPanel ml={5}>
                        <Link>1000원~2000원</Link>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default Sidebar;

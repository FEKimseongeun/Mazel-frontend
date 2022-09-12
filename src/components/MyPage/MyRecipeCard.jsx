import React from "react";
import { Box, Badge, Image } from "@chakra-ui/react";

function MyRecipeCard({ itemCard }) {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m="5">
            <Image src={itemCard.imageUrl} alt={itemCard.imageAlt} />

            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {itemCard.beds} beds &bull; {itemCard.baths} baths
                    </Box>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
                    {itemCard.title}
                </Box>

                <Box>
                    {itemCard.formattedPrice}
                    <Box as="span" color="gray.600" fontSize="sm">
                        / wk
                    </Box>
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {itemCard.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MyRecipeCard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Box, Grid } from "@chakra-ui/react";
import MyRecipeCard from "./MyRecipeCard";

const MyRecipe = () => {
    const property = [
        {
            recipe_id: 3,
            recipe_name: "막사",
            summary: "막걸리와 사이다를 섞어먹는다",
            img: "https://bit.ly/2Z4KKcF",
            measure_standard: "soju",
            tip: "칠성 사이다가 맛있어용",
            diff_score: 1.0,
            price_score: 2.0,
            sweet_score: 4.0,
            alcohol_score: 2.0,
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            beds: 3,
            baths: 2,
            title: "Modern home in city center in the heart of historic Los Angeles",
            formattedPrice: "$1,900.00",
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            beds: 3,
            baths: 2,
            title: "Modern home in city center in the heart of historic Los Angeles",
            formattedPrice: "$1,900.00",
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            beds: 3,
            baths: 2,
            title: "Modern home in city center in the heart of historic Los Angeles",
            formattedPrice: "$1,900.00",
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            beds: 3,
            baths: 2,
            title: "Modern home in city center in the heart of historic Los Angeles",
            formattedPrice: "$1,900.00",
            reviewCount: 34,
            rating: 4,
        },
    ];
    return (
        <div>
            <Grid templateColumns="repeat(auto-fit, minmax(260px, 1fr))">
                {property?.map((recipeItem) => (
                    <MyRecipeCard itemCard={recipeItem} />
                ))}
            </Grid>
        </div>
    );
};

export default MyRecipe;

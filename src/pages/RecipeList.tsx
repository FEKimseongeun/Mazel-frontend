import RecipeCard from "../components/RecipeCard";
import styled from "styled-components";
import FilterItem from "../components/FilterItem";
import { useEffect, useState } from "react";
import { getRecipeList } from "../apis/recipe";
import { RightButtonWrapper } from "./RecipeRegister";
import { Link } from "react-router-dom";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ListWrapper = styled.div`
    /* display: flex; */
`;

const RecipeListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h2 {
        width: 300px;
    }
`;

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);
    const isLogin = localStorage.getItem("isLogin");
    useEffect(() => {
        getRecipeList(
            (res: any) => {
                console.log(res.data);
                setRecipeList(res.data);
            },
            () => {
                alert("fail");
            },
        );
    }, []);

    const handleError = () => {
        alert("로그인 시 사용 가능한 서비스입니다.");
    };
    return (
        <PageWrapper>
            <FilterWrapper>
                <h2>필터</h2>
                <FilterItem />
            </FilterWrapper>
            <ListWrapper>
                <ListHeader>
                    <div>
                        <h2>검색된 조합레시피({recipeList.length})</h2>
                    </div>
                    <RightButtonWrapper>
                        {isLogin ? (
                            <Link to={"/recipe/register"}>
                                <button>레시피 등록</button>
                            </Link>
                        ) : (
                            <Link to={"/signin"}>
                                <button onClick={handleError}>레시피 등록</button>
                            </Link>
                        )}
                    </RightButtonWrapper>
                </ListHeader>

                <RecipeListWrapper>
                    {recipeList.map((recipe, index) => (
                        <RecipeCard recipe={recipe} key={index} />
                    ))}
                </RecipeListWrapper>
            </ListWrapper>
        </PageWrapper>
    );
};

export default RecipeList;

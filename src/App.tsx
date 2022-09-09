import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./App.css";
import RecipeList from "./pages/RecipeList";
import styled from "styled-components";
import Header from "./components/Nav/Header";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeRegister from "./pages/RecipeRegister";
import Home from "./pages/Home";
import SignIn from "./pages/SignInPage";
import SignUpStart from "./pages/SignUpPage";
import SignUp from "./container/SignUpContainer";
import Drink from "./pages/DrinkPage";
import SearchResults from "./pages/SearchResults";

//테스트용
import { Provider } from "./components/Drink/context/GlobalState";
import MyPage from "./pages/MyPage";

const Content = styled.div`
    width: 1240px;
    margin-bottom: 150px;
`;

function App() {
    return (
        <BrowserRouter>
            <Provider>
                <ChakraProvider theme={theme}>
                    <Header />
                    <Routes>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup/start" element={<SignUpStart />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/drink" element={<Drink />} />
                        <Route path="/search/:name" element={<SearchResults />} />
                        <Route path="/mypage" element={<MyPage />} />
                    </Routes>
                </ChakraProvider>
            </Provider>
            <Content>
                <Routes>
                    <Route path="/recipe" element={<RecipeList />} />
                    <Route path="/recipe/*" element={<RecipeDetail />} />
                    <Route path="/recipe/register" element={<RecipeRegister />} />
                </Routes>
            </Content>
        </BrowserRouter>
    );
}

export default App;

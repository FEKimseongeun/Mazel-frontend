import axios from "axios";
const URL = "http://13.125.182.32";

const token = sessionStorage.getItem("token");
console.log(token);

// get 요청 보내는 함수1
export const getDrinkInfo = (drink_id) => {
    console.log(drink_id);
    return axios.get(`http://13.125.182.32/drink/get/${drink_id}`, {
        headers: { token: `${token}` },
    });
};

// get 요청 보내는 함수2
export const getDrinkReview = (drink_id) => {
    return axios.get(`http://13.125.182.32/drink/review/${drink_id}`, {
        headers: { token: `${token}` },
    });
};

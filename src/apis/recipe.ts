import axios from "axios";

const URL = "http://43.200.106.127";

const jwtToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxZGM5MWZkLTBiZDYtNDQ0Mi04N2FiLTA1YzgxNGQxM2U3NyIsImV4cCI6MTY2MTQ3OTM5OX0.lzehIizaeEXr_A4Sc7_2lCQrmlqr7NuZyDSa4WmTJzs";

export const getRecipeList = async (success: any, fail: any) => {
    try {
        const res = await axios.get(`${URL}/recipe/list/`, {
            params: {
                offset: 0,
                limit: 20,
            },
        });
        success(res);
    } catch {
        fail();
    }
};

export const getRecipeDetail = async (param: any, success: any, fail: any) => {
    try {
        const res = await axios.get(`${URL}/recipe/detail/${param.id}/`);
        success(res);
    } catch {
        fail();
    }
};

export const getSubMeterial = async (param: any, success: any, fail: any) => {
    try {
        const config = {
            // param: { param },
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${jwtToken}`,
            },
        };

        const res = await axios.get(`${URL}/recipe/meterial/`, { params: param });
        success(res);
    } catch {
        fail();
    }
};

export const getDrinkList = async (success: any, fail: any) => {
    try {
        const res = await axios.get(`${URL}/drink/get/list/`);
        success(res);
    } catch {
        fail();
    }
};

export const registerSubMeterial = async (param: any, success: any, fail: any) => {
    console.log(param);
    try {
        const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${jwtToken}`,
                "X-CSRFToken": "csrftoken",
            },
        };

        const formData = new FormData();
        formData.append("meterial_name", param.meterial_name);
        // const res = await axios.post(`${URL}/recipe/meterial`, formData, {
        //     headers: {
        //         Authorization: `Bearer ${jwtToken}`,
        //     },
        // });

        // const res = await axios.post(`${URL}/recipe/meterial`, { params: param }, config);

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const qs = require("qs");
        const res = await axios({
            method: "post",
            url: `${URL}/recipe/meterial/`,
            data: formData,
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                token: `${jwtToken}`,
            },
        });

        console.log(res);

        success(res);
    } catch {
        fail();
    }
};

export const registerRecipe = async (param: any, success: any, fail: any) => {
    try {
        console.log(param);
        const formData = new FormData();

        // const blob = new Blob([JSON.stringify(param)], {
        //     type: "application/json",
        // });

        formData.append(
            "params",
            new Blob([JSON.stringify(param)], {
                type: "application/json",
            }),
        );

        const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${jwtToken}`,
            },
        };

        console.log(formData);

        const res = await axios.post(`${URL}/recipe/detail`, formData, config);

        success(res);
    } catch {
        fail();
    }
};

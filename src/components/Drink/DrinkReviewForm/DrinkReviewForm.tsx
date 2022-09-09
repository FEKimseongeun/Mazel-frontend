import { Box, Button, chakra, Text, VStack, Textarea } from "@chakra-ui/react";
import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { BiExit } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

// type Props = {
//     authType: string;
// };

interface Values {
    email: string;
    password: string;
}

// Give the components chakra props

const AuthForm = (props: any) => {
    const [value, setValue] = useState("");

    const handleInputChange = (e: any) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };

    const resisterReview = (e: any) => {
        const token = sessionStorage.getItem("token");
        const comment = "정말 맛있지모에요";
        const score = 5;
        const data = {
            comment: comment,
            score: score,
        };
        /* eslint-disable */
        const qs = require("qs");

        const res = axios({
            headers: {
                token: `${token}`,
                withCredentials: true,
                "Access-Control-Allow-Origin": "http://localhost:3000",
                Accept: "application/json",
            },
            method: "post",
            url: `http://mazle.ml/drink/review/${props.drink_id}`,
            data: qs.stringify(data),
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // const handleOnClick = () => {};

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values: Values, actions: FormikHelpers<Values>) => {
                setTimeout(() => {
                    console.log("submitted", values);
                    actions.setSubmitting(false);
                    actions.resetForm();
                }, 2000);
            }}
        >
            {(props) => (
                <VStack spacing={2}>
                    <Textarea
                        placeholder="첫 후기를 남겨주세요"
                        value={value}
                        onChange={handleInputChange}
                        bg="#F3F3F3"
                        fontSize={12}
                    />
                    <Button
                        type="submit"
                        isLoading={props.isSubmitting}
                        w="100%"
                        colorScheme="red"
                        fontWeight="700"
                        borderRadius="15"
                        bg="#FFE1E9"
                        _hover={{ backgroundColor: "#FFE1E9" }}
                        onClick={resisterReview}
                    >
                        <Text flex={6} fontSize={12} color="#BD8593">
                            댓글 등록하기
                        </Text>
                    </Button>
                </VStack>
            )}
        </Formik>
    );
};

export default AuthForm;

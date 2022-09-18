import { Box, Button, chakra, Text, VStack, Textarea, Link } from "@chakra-ui/react";
import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { BiExit } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

const AuthForm = (props) => {
    const [value, setValue] = useState("");
    const [comment, setComment] = useState("");

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };

    const resisterReview = (e) => {
        const score = 5;
        const data = {
            comment: value,
            score: score,
        };
        /* eslint-disable */
        const qs = require("qs");
        const token = sessionStorage.getItem("token");
        const res = axios({
            headers: {
                token: `${token}`,
            },
            method: "post",
            url: `http://13.125.182.32/drink/review/${props.drink_id}`,
            data: qs.stringify(data),
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        props.onSubmit();
    };

    // const handleOnClick = () => {};

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, actions) => {
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

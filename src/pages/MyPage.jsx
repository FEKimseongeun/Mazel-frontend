import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiCamera } from "react-icons/fi";
import ReactFileReader from "react-file-reader";
import { Button } from "@material-ui/core";
import { Image } from "@chakra-ui/react";

import MyContainer from "../container/MyContainer";

import sample from "../assets/images/banner_sample.png";

export const AvatarInput = styled.div`
    margin-bottom: 32px;
    position: relative;
    align-self: center;
    img {
        width: 100%;
        height: 247px;
        object-fit: cover;
    }
`;

function MyPage() {
    const [url, setUrl] = useState(sample);

    const handleFiles = (files) => {
        console.log(files);
        setUrl(files.base64);
    };

    return (
        <div style={{ border: "1px solid lightgray", borderRadius: "15px", height: "324px" }}>
            <AvatarInput>
                <Image src={url} alt="Avatar Placeholder" borderTopRadius={15} />
            </AvatarInput>

            <ReactFileReader fileTypes={[".png", ".jpg"]} base64={true} handleFiles={handleFiles}>
                <button
                    style={{
                        position: "absolute",
                        top: 270,
                        right: 370,
                        display: "flex",
                        backgroundColor: "#989898",
                        padding: "5px 10px 5px 10px",
                        borderRadius: 15,
                    }}
                >
                    <FiCamera style={{ width: 27, height: 27, marginRight: 10, color: "white" }} as={Button} />
                    <div style={{ marginTop: 3, color: "white" }}>Edit Cover</div>
                </button>
            </ReactFileReader>
            <ProfileTabs>
                {" "}
                <MyContainer />
            </ProfileTabs>
        </div>
    );
}

export default MyPage;

const ProfileTabs = styled.div`
    position: absolute;
    top: 27%;
    left: 21%;
`;

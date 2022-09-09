import { chakra, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    display: string[];
};

// Create new Form component and pass it chakra props
const Form = chakra("form");

const SearchBar = ({ display }: Props) => {
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setValue("");
        if (value !== "") navigate(`/search/${value}`);
    };
    return (
        <Form display={display} onSubmit={handleSubmit} w={["full", "sm"]} m="0 auto">
            <InputGroup>
                <Input
                    borderRadius="full"
                    bg="blackAlpha.200"
                    _focus={{
                        borderColor: "#FB5C00",
                        boxShadow: "0 0 0 1px #FB5C00",
                    }}
                    placeholder="찾는 레시피나 음료가 있으신가요?"
                    fontSize={["xs"]}
                    _placeholder={{
                        color: "gray.600",
                    }}
                    value={value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                />
                <InputRightElement
                    children={
                        value && (
                            <CloseIcon color="#FB5C00" fontSize={12} cursor="pointer" onClick={() => setValue("")} />
                        )
                    }
                />
            </InputGroup>
        </Form>
    );
};

export default SearchBar;

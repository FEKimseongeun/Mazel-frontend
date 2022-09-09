import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";

// Components style overrides
import Tabs from "./components/tabs";

const overrides = {
    styles,

    colors,
    components: {
        Tabs,
    },
    fonts: {
        heading: "‘SUIT Variable’, sans-serif",
        body: "‘SUIT Variable’, sans-serif",
    },
};

export default extendTheme(overrides);

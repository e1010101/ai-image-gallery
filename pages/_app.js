import { ChakraProvider } from "@chakra-ui/react";
import PropTypes from "prop-types";

import Head from "../components/Head";
import theme from "../styles/theme";
import "@fontsource/merriweather";
import "@fontsource/poppins";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head title="Ezra's Gallery" description="AI-Generated Artwork" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

import { ChakraProvider } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
import theme from "../styles/theme";
import "@fontsource/merriweather";
import "@fontsource/poppins";

const HeadComponent = lazy(() => import("../components/Head"));
const renderLoader = () => <p>Loading</p>;

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={renderLoader()}>
        <HeadComponent
          title="Ezra's Gallery"
          description="AI-Generated Artwork"
        />
      </Suspense>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

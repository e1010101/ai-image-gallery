import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: mode("white", "black")(props),
      },
    }),
  },
  fonts: { heading: `'Merriweather', serif`, body: `'Poppins', sans-serif` },
  components: {
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: mode("black", "white")(props),
        },
      }),
    },
  },
});

export default theme;

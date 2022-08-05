import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import ThemeToggleButton from "./ThemeToggleButton";
import { FilterIcon } from "../styles/icons";
import { Generators } from "../lib/Info";
import ShuffleButton from "./ShuffleButton";

export default function Header({ imageGroup, setImageGroup, shuffle }) {
  const bgColor = useColorModeValue("white", "black");
  const textColor = useColorModeValue("white", "black");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mural = `/mural${useColorModeValue("", "-dark")}.webp`;

  return (
    <Box
      bgImage={mural}
      bgPosition="center"
      bgSize="1920px"
      position="fixed"
      borderBottomWidth="3px"
      borderBottomColor={useColorModeValue("white", "black")}
      w="100%"
      zIndex={1}
      backgroundColor={bgColor}
    >
      <Container
        maxW="6xl"
        py={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          bgColor={useColorModeValue("white", "black")}
          variant="solid"
          fontSize="xl"
          _hover={useColorModeValue(
            { backgroundColor: "black", color: "white" },
            { backgroundColor: "white", color: "black" }
          )}
          onClick={scrollToTop}
        >
          Home
        </Button>
        <Box>
          <Menu closeOnSelect={false}>
            <MenuButton
              backgroundColor={textColor}
              as={IconButton}
              variant="ghost"
              aria-label="Toggle theme"
              _hover={useColorModeValue(
                { backgroundColor: "black", color: "white" },
                { backgroundColor: "white", color: "black" }
              )}
              icon={<FilterIcon />}
            />
            <MenuList backgroundColor={textColor}>
              <MenuOptionGroup
                title="Generated By"
                type="checkbox"
                defaultValue={imageGroup}
                onChange={(val) => {
                  setImageGroup(val);
                  scrollToTop();
                  shuffle();
                }}
              >
                {Generators.map((generator, idx) => (
                  <MenuItemOption
                    key={idx}
                    value={generator}
                    isDisabled={
                      imageGroup.length === 1 && imageGroup.includes(generator)
                    }
                  >
                    {generator}
                  </MenuItemOption>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <ShuffleButton shuffle={() => shuffle()} />
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
}

Header.propTypes = {
  imageGroup: PropTypes.arrayOf(PropTypes.string).isRequired,
  setImageGroup: PropTypes.func.isRequired,
};

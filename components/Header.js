import { MoonIcon } from "@chakra-ui/icons";
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
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import ThemeToggleButton from "./ThemeToggleButton";

import { FilterIcon, LightBulbIcon } from "../styles/icons";

export default function Header({}) {
  const bgColor = useColorModeValue("white", "black");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box position="fixed" w="100%" zIndex={1} backgroundColor={bgColor}>
      <Container
        maxW="6xl"
        py={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button variant="ghost" fontSize="xl" onClick={scrollToTop}>
          Home
        </Button>
        <Box>
          {/* <Menu closeOnSelect={false}>
                        <MenuButton
                            as={IconButton}
                            variant="ghost"
                            aria-label="Toggle theme"
                            icon={<FilterIcon />}
                        />
                        <MenuList>
                            <MenuOptionGroup
                                title="Filter"
                                defaultValue={filter}
                                type="radio"
                                onChange={(val) => {
                                    setFilter(val);
                                    scrollToTop();
                                }}>
                                <MenuItemOption value="hot">Hot</MenuItemOption>
                                <MenuItemOption value="new">New</MenuItemOption>
                                <MenuItemOption value="top">Top</MenuItemOption>
                            </MenuOptionGroup>
                            <MenuOptionGroup
                                title="Subreddit"
                                type="checkbox"
                                defaultValue={subreddits}
                                onChange={(val) => {
                                    setSubreddits(val);
                                    scrollToTop();
                                }}>
                                {SUBREDDITS.map((sub, idx) => (
                                    <MenuItemOption
                                        key={idx}
                                        value={sub}
                                        isDisabled={
                                            subreddits.length === 1 && subreddits.includes(sub)
                                        }>
                                        r/{sub}
                                    </MenuItemOption>
                                ))}
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu> */}
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
}

Header.propTypes = {};

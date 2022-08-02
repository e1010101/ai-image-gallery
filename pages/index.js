import { RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Skeleton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import Card from "../components/Card";
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import PreviewImage from "../components/PreviewImage";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("hot");

  const view = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  return (
    <Box minHeight="100vh" maxW="auto" display="flex" flexDir="column">
      <Header />
      <Container maxW="6xl" mt="95px" flex={1}>
        <Box textAlign="center">
          <Heading letterSpacing="widest" as="h1" size="4xl">
            Ezra's Gallery
          </Heading>
          <Heading
            letterSpacing="wider"
            fontSize="lg"
            fontWeight="semibold"
            mt={4}
          >
            AI-generated art from{" "}
            <Link href="https://labs.openai.com/" isExternal>
              DALL-E
            </Link>
            ,{" "}
            <Link href="https://www.midjourney.com/" isExternal>
              Midjourney
            </Link>{" "}
            and other generators.
          </Heading>
        </Box>
        <ImageGallery view={view} />
      </Container>
      {selectedItem && (
        <PreviewImage item={selectedItem} isOpen={isOpen} onClose={onClose} />
      )}
      <Container as="footer" maxW="xl" textAlign="center" py={10}>
        <Text fontWeight="bold">
          Visit my{" "}
          <Link href="https://github.com/e1010101" isExternal>
            Github!
          </Link>
        </Text>
      </Container>
    </Box>
  );
}

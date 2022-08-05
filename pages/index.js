import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect, lazy, Suspense } from "react";
import { Generators, Info } from "../lib/Info";

const HeaderComponent = lazy(() => import("../components/Header"));
const ImageGalleryComponent = lazy(() => import("../components/ImageGallery"));
const PreviewImageComponent = lazy(() => import("../components/PreviewImage"));
const renderLoader = () => <p>Loading</p>;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageGroup, setImageGroup] = useState(Generators);
  const [selectedItem, setSelectedItem] = useState(null);
  // const [filter, setFilter] = useState("hot");

  // randomize items when page loads
  const [list, setList] = useState(Info);
  useEffect(() => {
    const mountArray = shuffle([...Info]);
    setList(mountArray);
  }, []);

  function handleShuffle() {
    const changes = shuffle([...list]);
    setList(changes);
  }

  const view = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  return (
    <Box minHeight="100vh" maxW="auto" display="flex" flexDir="column">
      <Suspense fallback={renderLoader()}>
        <HeaderComponent
          imageGroup={imageGroup}
          setImageGroup={setImageGroup}
          shuffle={handleShuffle}
        />
      </Suspense>
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
              DALL-E 2
            </Link>
            ,{" "}
            <Link href="https://www.midjourney.com/" isExternal>
              Midjourney
            </Link>{" "}
            and other generators.
          </Heading>
        </Box>
        <Suspense fallback={renderLoader()}>
          <ImageGalleryComponent
            view={view}
            imageGroup={imageGroup}
            info={list}
          />
        </Suspense>
      </Container>
      {selectedItem && (
        <PreviewImageComponent
          item={selectedItem}
          isOpen={isOpen}
          onClose={onClose}
        />
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

import { useState } from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/Card";
import { Info } from "../lib/Info";

const imagePerRow = 15;

export default function ImageGallery({ view }) {
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={6}>
        {Info?.slice(0, next).map((item, index) => (
          <Card key={index} item={item} onImageClick={view} />
        ))}
      </SimpleGrid>
      {next < Info?.length && (
        <Box textAlign="center" mt={8}>
          <Button leftIcon={<RepeatIcon />} onClick={handleMoreImage}>
            Load More
          </Button>
        </Box>
      )}
    </>
  );
}

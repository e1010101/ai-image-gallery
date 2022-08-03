import { useState } from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/Card";

const imagePerRow = 15;

export default function ImageGallery({ view, imageGroup, info }) {
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const filter = [...info.filter((x) => imageGroup.includes(x.generatedBy))];
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={6}>
        {filter?.slice(0, next).map((item, index) => (
          <Card key={index} item={item} onImageClick={view} />
        ))}
      </SimpleGrid>
      {next < filter?.length && (
        <Box textAlign="center" mt={8}>
          <Button leftIcon={<RepeatIcon />} onClick={handleMoreImage}>
            Load More
          </Button>
        </Box>
      )}
    </>
  );
}

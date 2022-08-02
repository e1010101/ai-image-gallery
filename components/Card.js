import { ArrowUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Img,
  Link,
  Text,
  Heading,
  useColorModeValue,
  border,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const MotionImg = motion(Img);

export default function Card({ item, onImageClick }) {
  const cardColor = useColorModeValue("black", "white");
  const textColor = useColorModeValue("white", "black");

  return (
    <Box
      backgroundColor={cardColor}
      borderRadius={["sm", null, "md"]}
      overflow="hidden"
    >
      <Box
        onClick={() => onImageClick(item)}
        cursor="pointer"
        h="240px"
        position="relative"
        overflow="hidden"
      >
        <MotionImg
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          w="100%"
          h="100%"
          objectFit="cover"
          src={item.image}
        />
      </Box>
      <Flex px="4" py="2" mb="-3" align="center">
        <Text color={textColor} fontWeight="bold" fontSize={["md", null, "sm"]}>
          {item.generatedBy.toUpperCase()}
        </Text>
      </Flex>
      <Flex px="4" py="2" align="center" justify="space-between" w="100%">
        <Text color={textColor} fontSize={["xs", null, "sm"]}>
          {item.promptText}
        </Text>
      </Flex>
    </Box>
  );
}

Card.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};
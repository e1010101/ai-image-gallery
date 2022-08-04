import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

const variants = {
  rotate: {
    initial: { scale: 0 },
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  stop: {},
};

const ShuffleButton = ({ shuffle }) => {
  const [rotate, setRotate] = useState(false);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        variants={variants}
        style={{ display: "inline-block" }}
        animate={rotate ? "rotate" : "stop"}
      >
        <IconButton
          ml={1}
          mr={1}
          aria-label="Shuffle Images"
          color={useColorModeValue("black", "white")}
          bgColor={useColorModeValue("white", "black")}
          icon={<RepeatIcon />}
          _hover={useColorModeValue(
            { backgroundColor: "black", color: "white" },
            { backgroundColor: "white", color: "black" }
          )}
          onClick={() => {
            setRotate(true);
            shuffle();
            setTimeout(() => {
              setRotate(false);
            }, 1000);
          }}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ShuffleButton;

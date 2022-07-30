import { chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraFramerBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export default ChakraFramerBox;

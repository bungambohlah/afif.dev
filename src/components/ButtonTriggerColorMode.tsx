import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import ChakraFramerBox from './framermotion/ChakraFramerBox';

export default function ButtonTriggerColorMode(
  props: PropsWithChildren<Record<string, unknown>>,
): JSX.Element {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <ChakraFramerBox whileTap={{ scale: 0.5 }}>
      <IconButton
        size='md'
        fontSize='lg'
        aria-label={`Switch to ${text} mode`}
        variant='ghost'
        color='current'
        marginLeft='2'
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </ChakraFramerBox>
  );
}

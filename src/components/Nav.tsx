import { Box } from '@chakra-ui/react';

import ButtonTriggerColorMode from './ButtonTriggerColorMode';

export default function Nav(): JSX.Element {
  return (
    <nav>
      <Box mt={-16 + 4} position='absolute' right='4'>
        <ButtonTriggerColorMode />
      </Box>
    </nav>
  );
}

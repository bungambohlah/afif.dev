import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Heading,
  Flex,
  Box,
  useBreakpointValue,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

import ChakraNextImage from './ChakraNextImage';

const name = 'Afif Abdillah Jusuf';
export const siteTitle = 'Hello from Afif 👋🏼';

export function Layout({ children, home }) {
  const headingSize = useBreakpointValue({
    base: 'lg',
    md: 'xl',
  });
  const background = useColorModeValue('gray.200', 'whiteAlpha.100');

  return (
    <Box>
      <header>
        {home ? (
          <Flex
            direction='column'
            justifyContent='center'
            alignItems='center'
            gap={4}
            mt={16}
            mb={8}>
            <ChakraNextImage
              width={[95, 100, 110, 130, 150]}
              height={[95, 100, 110, 130, 150]}
              src='/images/profile.png'
              borderRadius='50%'
              name={name}
            />
            <Box
              display='flex'
              backdropBlur='md'
              borderColor='black'
              background={background}
              paddingY='2'
              paddingX='4'
              borderRadius='lg'
              margin='auto'
              justifyContent='center'
              boxSizing='unset'>
              <Heading
                fontWeight={400}
                as='h1'
                size={headingSize}
                alignItems='center'
                fontFamily='mono'>
                {name} <span> 👋</span>
              </Heading>
            </Box>
          </Flex>
        ) : (
          <Flex
            direction='column'
            justifyContent='center'
            alignItems='center'
            my={16}>
            <Link href='/'>
              <a>
                <ChakraNextImage
                  width={[105, 110, 115, 120, 130]}
                  height={[105, 110, 115, 120, 130]}
                  src='/images/profile.png'
                  borderRadius='50%'
                  name={name}
                />
              </a>
            </Link>
            <Heading
              as='h2'
              size='2xl'
              my={4}
              alignItems='center'
              fontFamily='mono'>
              <Link href='/'>
                <a>{name}</a>
              </Link>
            </Heading>
          </Flex>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <Box my={6}>
          <Button
            aria-label='Back to home'
            leftIcon={<ArrowBackIcon />}
            colorScheme='gray'
            variant='outline'>
            <Link href='/'>
              <a>Back to home</a>
            </Link>
          </Button>
        </Box>
      )}
    </Box>
  );
}

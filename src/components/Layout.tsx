'use client';

import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Heading,
  Flex,
  Box,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import ChakraNextImage from './ChakraNextImage';

const name = 'Afif Abdillah Jusuf';
export const siteTitle = 'Hello from Afif 👋🏼';

type LayoutProps = {
  children: ReactNode;
  home?: boolean;
};
export function Layout({ children, home }: LayoutProps): JSX.Element {
  const headingSize = {
    base: 'lg',
    md: 'xl',
  };
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
              width={{
                base: 95,
                sm: 95,
                md: 100,
                lg: 110,
                xl: 130,
                '2xl': 150,
              }}
              height={{
                base: 95,
                sm: 95,
                md: 100,
                lg: 110,
                xl: 130,
                '2xl': 150,
              }}
              src='/images/profile.png'
              alt={name}
              borderRadius='50%'
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
              <ChakraNextImage
                width={{
                  base: 105,
                  sm: 105,
                  md: 110,
                  lg: 115,
                  xl: 120,
                  '2xl': 130,
                }}
                height={{
                  base: 105,
                  sm: 105,
                  md: 110,
                  lg: 115,
                  xl: 120,
                  '2xl': 130,
                }}
                src='/images/profile.png'
                alt={name}
                borderRadius='50%'
              />
            </Link>
            <Heading
              as='h2'
              size='2xl'
              my={4}
              alignItems='center'
              fontFamily='mono'>
              <Link href='/'>{name}</Link>
            </Heading>
          </Flex>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <Link href='/' passHref>
          <Box my={6}>
            <Button
              aria-label='Back to home'
              leftIcon={<ArrowBackIcon />}
              colorScheme='gray'
              variant='outline'>
              Back to home
            </Button>
          </Box>
        </Link>
      )}
    </Box>
  );
}

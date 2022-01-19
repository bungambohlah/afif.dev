import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Heading,
  Flex,
  Box,
  Avatar,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';

const name = 'Afif Abdillah Jusuf';
export const siteTitle = 'Hello from Afif 👋🏼';

export function Layout({ children, home }) {
  const headingSize = useBreakpointValue({
    base: 'xl',
    xl: '2xl',
  });

  return (
    <Box>
      <header>
        {home ? (
          <Flex
            direction='column'
            justifyContent='center'
            alignItems='center'
            mt={16}>
            <Avatar size='2xl' src='/images/profile.jpg' name={name} />
            <Heading as='h1' size={headingSize} my={4} textAlign='center'>
              {name}
            </Heading>
          </Flex>
        ) : (
          <Flex
            direction='column'
            justifyContent='center'
            alignItems='center'
            my={16}>
            <Link href='/'>
              <a>
                <Avatar size='2xl' src='/images/profile.jpg' name={name} />
              </a>
            </Link>
            <Heading as='h2' size='2xl' my={4}>
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

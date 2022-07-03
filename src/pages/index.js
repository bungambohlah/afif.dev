import {
  Container,
  Flex,
  Text,
  Box,
  Heading,
  List,
  ListItem,
  Button,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';

import { Icon } from '../components/Icon';
import LinkedinBadge from '../components/LinkedinBadge';
import Date from '../components/date';
import { siteTitle, Layout } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

// (Static Generation): Fetch data at build time
export const getStaticProps = async (ctx) => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <>
      <NextSeo title='Home' />
      <Container maxW='container.sm'>
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <Flex
            direction='column'
            justifyContent='flex-start'
            alignItems='center'>
            <Text fontSize='xl' pb='4'>
              Hello, my name is Afif, just call me Apep. My Professional skill
              are a Full-Stack developer and have a much year of experiences
              especially on Web Based Program.
            </Text>
            <Text fontSize='xl'>
              Contact me if you need anything on me, list on the below.
            </Text>
            <Box mx='auto'>
              <Flex alignItems='center' justifyContent='center' wrap='wrap'>
                <Button
                  colorScheme='facebook'
                  my='4'
                  mx='1'
                  onClick={() =>
                    window.open(
                      'https://fb.me/rudrafentje.samasamagila',
                      '_target',
                    )
                  }>
                  <Icon name='facebook' />
                </Button>
                <Button
                  colorScheme='twitter'
                  my='4'
                  mx='1'
                  onClick={() =>
                    window.open('https://twitter.com/bungambohlah', '_target')
                  }>
                  <Icon name='twitter' />
                </Button>
                <Button
                  colorScheme='github'
                  my='4'
                  mx='1'
                  onClick={() =>
                    window.open('https://github.com/bungambohlah', '_target')
                  }>
                  <Icon name='github' />
                </Button>
                <Button
                  colorScheme='linkedin'
                  mx='1'
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/afifjusuf/',
                      '_target',
                    )
                  }>
                  <Icon name='linkedin' />
                </Button>
              </Flex>
            </Box>
          </Flex>

          {/* Blog */}
          <section style={{ padding: '24px 0' }}>
            <Heading as='h2' size='lg' mb={6}>
              Blog
            </Heading>
            <List spacing={3}>
              {allPostsData.map(({ id, date, title }) => (
                <ListItem key={id} cursor='pointer'>
                  <Link href={`/posts/${id}`} passHref>
                    <Heading as='h3' size='md'>
                      {title}
                    </Heading>
                  </Link>
                  <Text fontSize='sm' my='1'>
                    <Date dateString={date} />
                  </Text>
                </ListItem>
              ))}
            </List>
          </section>

          {/* Portofolio */}
          <section style={{ padding: '24px 0' }}>
            <Heading as='h2' size='lg'>
              Portofolio
            </Heading>
            <Text fontSize='sm' my='1'>
              Coming soon...
            </Text>
          </section>

          {/* Linkedin Badge */}
          <section style={{ padding: '24px 0' }}>
            <Heading as='h2' size='lg' mb={6}>
              My Linkedin
            </Heading>
            <LinkedinBadge
              size='large'
              locale='en_US'
              theme='dark'
              vanity='afifjusuf'
            />
          </section>
        </Layout>
      </Container>
    </>
  );
}

Home.layoutProps = {
  Layout: (props) => <Box borderLeft={4} {...props} />,
};

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
import BgAnimation from 'components/animation/BgAnimation';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import { Icon } from '../components/Icon';
import { siteTitle, Layout } from '../components/Layout';
import Date from '../components/date';
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
  const [links] = useState({
    cv_en: {
      name: 'CV (EN)',
      url: '/cv/CV Afif Abdillah Jusuf_en.pdf',
    },
    cv_id: {
      name: 'CV (ID)',
      url: '/cv/CV Afif Abdillah Jusuf_id.pdf',
    },
    resume: {
      name: 'Resume',
      url: '/resume/Resume Afif Abdillah Jusuf.pdf',
    },
  });

  return (
    <>
      <BgAnimation />
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
                  aria-label='My Facebook'
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
                  aria-label='My Twitter'
                  colorScheme='twitter'
                  my='4'
                  mx='1'
                  onClick={() =>
                    window.open('https://twitter.com/bungambohlah', '_target')
                  }>
                  <Icon name='twitter' />
                </Button>
                <Button
                  aria-label='My Github'
                  colorScheme='github'
                  my='4'
                  mx='1'
                  onClick={() =>
                    window.open('https://github.com/bungambohlah', '_target')
                  }>
                  <Icon name='github' />
                </Button>
                <Button
                  aria-label='My Linkedin'
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
                <Button
                  aria-label='My Polywork'
                  colorScheme='polywork'
                  mx='1'
                  onClick={() =>
                    window.open('https://polywork.afif.dev/', '_target')
                  }>
                  <Icon name='polywork' />
                </Button>
              </Flex>
            </Box>
          </Flex>

          {/* CV & Resume */}
          <section style={{ padding: '24px 0' }}>
            <Heading as='h2' size='lg' mb={6}>
              CV And Resume
            </Heading>
            <Flex
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
              spacing={3}>
              {Object.keys(links).map((key) => (
                <Link key={key} href={links[key].url} passHref>
                  <Button
                    aria-label={links[key].name}
                    colorScheme='messenger'
                    mx='1'>
                    <Text fontSize='sm'>{links[key].name}</Text>
                  </Button>
                </Link>
              ))}
            </Flex>
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
        </Layout>
      </Container>
    </>
  );
}

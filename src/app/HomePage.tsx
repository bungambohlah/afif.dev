'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MouseEventHandler } from 'react';

import Date from '../components/date';
import { Layout } from '../components/Layout';
import type { PostData } from '../lib/posts';

type LinkData = {
  name: string;
  url: string;
};

type ListLink = {
  cv_en: LinkData;
  cv_id: LinkData;
  resume: LinkData;
};
type ListLinkKey = keyof ListLink;
type IndexPageProps = {
  allPostsData: PostData[];
};
export default function HomePage({
  allPostsData,
}: IndexPageProps): JSX.Element {
  const links: ListLink = {
    cv_en: {
      name: 'CV (EN).pdf',
      url: '/cv/CV Afif Abdillah Jusuf_en.pdf',
    },
    cv_id: {
      name: 'CV (ID).pdf',
      url: '/cv/CV Afif Abdillah Jusuf_id.pdf',
    },
    resume: {
      name: 'Resume.pdf',
      url: '/resume/Resume Afif Abdillah Jusuf.pdf',
    },
  };

  return (
    <Layout home={true}>
      <Flex direction='column' justifyContent='flex-start' alignItems='center'>
        <Text fontSize='xl' pb='4'>
          Hello, my name is Afif, just call me Apep. My Professional skill are a
          Full-Stack developer and have a much year of experiences especially on
          Web Based Program.
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
                window.open('https://fb.me/rudrafentje.samasamagila', '_target')
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
                window.open('https://www.linkedin.com/in/afifjusuf/', '_target')
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
        <Flex direction='row' justifyContent='flex-start' alignItems='center'>
          {Object.keys(links).map((key) => {
            const keyLink = key as ListLinkKey;
            return (
              <Link
                key={key}
                href={links[keyLink].url}
                download={links[keyLink].name}
                prefetch={false}
                target='_blank'>
                <Button
                  aria-label={links[keyLink].name}
                  colorScheme='messenger'
                  mx='1'>
                  <Text fontSize='sm'>{links[keyLink].name}</Text>
                </Button>
              </Link>
            );
          })}
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
          {allPostsData
            ? allPostsData.map(({ id, date, title }) => (
                <Link key={id} href={`/posts/${id}`} prefetch={false}>
                  <ListItem cursor='pointer'>
                    <Heading as='h3' size='md'>
                      {title}
                    </Heading>
                    {date ? (
                      <Text fontSize='sm' my='1'>
                        <Date dateString={date} />
                      </Text>
                    ) : null}
                  </ListItem>
                </Link>
              ))
            : null}
        </List>
      </section>
    </Layout>
  );
}

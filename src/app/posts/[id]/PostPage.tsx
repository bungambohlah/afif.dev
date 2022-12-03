'use client';

import { Container, Heading, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Date from '../../../components/date';
import { Layout } from '../../../components/Layout';
import type { PostData } from '../../../lib/posts';

type PostPageProps = {
  post: PostData;
};
export default function PostPage({ post }: PostPageProps): JSX.Element {
  return (
    <>
      <NextSeo title={post.title} />
      <Container maxW='container.sm'>
        <Layout>
          <Head>
            <title>{post.title}</title>
          </Head>
          <Heading as='h2' size='lg' my={1}>
            {post.title}
          </Heading>
          {post.date ? (
            <Text fontSize='md' mb='4'>
              <Date dateString={post.date} />
            </Text>
          ) : null}
          {post.contentHtml ? (
            <article dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          ) : null}
        </Layout>
      </Container>
    </>
  );
}

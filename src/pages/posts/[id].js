/* eslint-disable react/no-danger */
import { Container, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

import Date from '../../components/date';
import { Layout } from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export const getStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

// (Static Generation): Fetch data at build time
export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }) {
  return (
    <Container maxW='container.sm'>
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Heading as='h2' size='lg' my={1}>
          {postData.title}
        </Heading>
        <Text fontSize='md' mb='4'>
          <Date dateString={postData.date} />
        </Text>
        <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
    </Container>
  );
}

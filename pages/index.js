import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Icon from "../components/Icon";
import {
  Container,
  Flex,
  Text,
  Box,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useBreakpointValue } from "@chakra-ui/media-query";

// (Static Generation): Fetch data at build time
export const getStaticProps = async (ctx) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <Container maxW="container.sm">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Text fontSize="xl" pb="4">
            Hello, my name is Afif, just call me Apep. My Professional skill are
            a Full-Stack developer and have a much year of experiences
            especially on Web Based Program.
          </Text>
          <Text fontSize="xl" pb="4">
            Contact me if you need anything on me, list on the below.
          </Text>
          <Box mx="auto">
            <Flex alignItems="center" justifyContent="center" wrap="wrap">
              <Button colorScheme="facebook" m={3}>
                <Icon name="facebook" />
                Facebook
              </Button>
              <Button colorScheme="twitter" m={3}>
                <Icon name="twitter" />
                Twitter
              </Button>
              <Button colorScheme="github" m={3}>
                <Icon name="github" />
                Github
              </Button>
              <Button colorScheme="linkedin" m={3}>
                <Icon name="linkedin" />
                LinkedIn
              </Button>
            </Flex>
          </Box>
        </Flex>

        <section>
          <Heading as="h2" size="lg" mb={6}>
            Blog
          </Heading>
          <List spacing={3}>
            {allPostsData.map(({ id, date, title }) => (
              <ListItem key={id} cursor="pointer">
                <Link href={`/posts/${id}`}>
                  <Heading as="h3" size="md">
                    {title}
                  </Heading>
                </Link>
                <small className="prose lg:prose-xl dark:text-white font-light">
                  <Date dateString={date} />
                </small>
              </ListItem>
            ))}
          </List>
        </section>
      </Layout>
    </Container>
  );
}

import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import { Heading, Flex, Box } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";

const name = "Afif Abdillah Jusuf";
export const siteTitle = "Hello from Afif 👋🏼";

const Layout = ({ children, home }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`${name}'s Personal Website, hit the button if you like to visit me :)`}
        />
        <meta
          name="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content={"summary_large_image"} />
      </Head>
      <header>
        {home ? (
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            mt={16}
          >
            <Avatar size="2xl" src="/images/profile.jpg" name={name} />
            <Heading
              as="h1"
              size={useBreakpointValue({
                base: "xl",
                xl: "2xl",
              })}
              my={4}
              textAlign="center"
            >
              {name}
            </Heading>
          </Flex>
        ) : (
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            my={16}
          >
            <Link href="/">
              <a>
                <Avatar size="2xl" src="/images/profile.jpg" name={name} />
              </a>
            </Link>
            <Heading as="h2" size="2xl" my={4}>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </Heading>
          </Flex>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <Box mt={12}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </Box>
      )}
    </div>
  );
};

export default Layout;

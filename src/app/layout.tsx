'use client';

import { Container } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { usePathname } from 'next/navigation';

import BgAnimation from '../components/animation/BgAnimation';
import Nav from '../components/Nav';
import Transition from '../components/Transition';
import { SEO } from '../constants/seo-constant';
import theme from '../styles/theme';
import './global.css';

const {
  DEFAULT_TITLE_TEMPLATE,
  DEFAULT_DESCRIPTION,
  DEFAULT_CANONICAL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  FAVICON_LINK,
} = SEO;

type IndexLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: IndexLayoutProps): JSX.Element {
  // const allPostsData = await getPostData();
  const pathname = usePathname();
  const canonicalPath = !pathname || pathname === '/' ? '' : pathname;
  const url = `${DEFAULT_CANONICAL}${canonicalPath}`;

  return (
    <html lang='en'>
      <body>
        <DefaultSeo
          title={DEFAULT_TITLE}
          titleTemplate={DEFAULT_TITLE_TEMPLATE}
          description={DEFAULT_DESCRIPTION}
          canonical={url}
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url,
            site_name: SITE_NAME,
            title: SITE_NAME,
            description: DEFAULT_DESCRIPTION,
            images: [
              {
                url: DEFAULT_OG_IMAGE,
                alt: SITE_NAME,
              },
            ],
          }}
          twitter={{
            handle: TWITTER_HANDLE,
            site: TWITTER_HANDLE,
            cardType: 'summary_large_image',
          }}
          additionalLinkTags={[
            {
              rel: 'shortcut icon',
              href: FAVICON_LINK,
            },
          ]}
        />
        <ChakraProvider theme={theme}>
          <Nav />
          <Transition>
            <CSSReset />
            <BgAnimation />
            <NextSeo title='Home' />
            <Container maxW='container.sm'>{children}</Container>
          </Transition>
        </ChakraProvider>
      </body>
    </html>
  );
}

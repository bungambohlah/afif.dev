import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

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
    <div className='md:container md:mx-auto'>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <section>
            <p>
              Hello, my name is Afif, just call me Apep. Backend-developer to be
              Full-stack developer PHP. Node.JS, and many framework etc.
            </p>
            <p>
              (This is a sample website - you’ll be building a site like this on{' '}
              <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
            </p>
          </section>
        </main>

        {/* <section>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section> */}
      </Layout>
    </div>
  );
}

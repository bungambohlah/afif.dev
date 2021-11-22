import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Icon from '../components/Icon';

// (Static Generation): Fetch data at build time
// export const getStaticProps = async (ctx) => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };

// (Server-side Rendering): Fetch data on each request.
export const getServerSideProps = async (ctx) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className='flex flex-col justify-start'>
          <p className='prose lg:prose-xl dark:text-white'>
            Hello, my name is Afif, just call me Apep. My Professional skill are
            a Full-Stack developer and have a much year of experiences
            especially on Web Based Program.
          </p>
          <p className='prose lg:prose-xl dark:text-white'>
            Contact me if you need anything on me, list on the below.
          </p>
          <div className='mx-auto sm:my-auto'>
            <div className='flex items-center justify-center space-x-3'>
              <button className='bg-blue-500 hover:bg-blue-700 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
                <Icon name='facebook' />
                <span>Facebook</span>
              </button>
              <button className='bg-twitter hover:bg-twitter-hover px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
                <Icon name='twitter' />
                <span>Twitter</span>
              </button>
              <button className='bg-black bg-opacity-80 hover:bg-black px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
                <Icon name='github' />
                <span>Github</span>
              </button>
              <button className='bg-linkedin hover:bg-linkedin-hover px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
                <Icon name='linkedin' />
                <span>LinkedIn</span>
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className='prose lg:prose-xl dark:text-white font-semibold'>
            Blog
          </h2>
          <ul className='flex justify-start flex-col'>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className='prose lg:prose-xl dark:text-white font-light'>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </div>
  );
}

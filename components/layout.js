import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';

const name = 'Afif Abdillah Jusuf';
export const siteTitle = 'Hello from Afif 👋🏼';

const Layout = ({ children, home }) => {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Mari belajar next.js website' />
        <meta
          name='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content={'summary_large_image'} />
      </Head>
      <header>
        {home ? (
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='flex-1'>
              <Image
                priority
                src='/images/profile.jpg'
                height={144}
                width={144}
                alt={name}
                className='rounded-full md:rounded-full'
              />
            </div>
            <div className='flex-1'>
              <h1 className='text-4xl sm:text-5xl font-bold'>{name}</h1>
            </div>
          </div>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/profile.jpg'
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className='text-base md:text-lg font-bold'>
              <Link href='/'>
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main class='prose-xl'>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;

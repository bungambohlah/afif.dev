import Head from 'next/head'

import Date from '../../components/date'
import { Layout } from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export const getStaticPaths = async () => {
  const paths = await getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

// (Static Generation): Fetch data at build time
export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

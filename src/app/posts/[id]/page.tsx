import { getAllPostIds, getPostData } from '../../../lib/posts';
import type { PostData } from '../../../lib/posts';
import PostPage from './PostPage';

type PostProps = {
  params: { id: string };
};

export function generateStaticParams() {
  const paths = getAllPostIds();

  return paths;
}

async function getPost(params: PostProps['params']): Promise<PostData> {
  return await getPostData(params.id);
}

export default async function Post({ params }: PostProps) {
  const post = await getPost(params);

  return <PostPage post={post} />;
}

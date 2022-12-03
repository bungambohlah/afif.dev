import cache from 'memory-cache';
import HomePage from './HomePage';

import { getSortedPostsData, PostData } from '../lib/posts';

// (Static Generation): Fetch data at build time
async function getPostData(): Promise<PostData[]> {
  const cacheSortedPost = cache.get('sortedPost') as string;
  const sortedPost: PostData[] = JSON.parse(
    cacheSortedPost ?? 'null',
  ) as PostData[];

  // if sortedPost is not empty then return the cache
  if (sortedPost?.length) {
    return sortedPost;
  }

  // if not have any cache, then need to request to the server
  const sortedPostData = await getSortedPostsData();
  cache.put('sortedPost', JSON.stringify(sortedPostData));
  return sortedPostData;
}

export default async function IndexPage(): Promise<JSX.Element> {
  const allPostsData = await getPostData();
  return <HomePage allPostsData={allPostsData} />;
}

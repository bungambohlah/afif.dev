import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export type PostData = {
  id: string;
  title?: string;
  date?: string;
  content?: string;
  contentHtml?: string;
};

export async function getSortedPostsData(): Promise<PostData[]> {
  // Get file names under /posts
  const fileNames = await fs.promises.readdir(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/u, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    const postData: PostData = {
      id,
      title: matterResult.data.title as string,
      date: matterResult.data.date as string,
      ...matterResult.data,
    };
    return postData;
  });

  // Sort posts by date
  return allPostsData.sort((n1, n2) => {
    if (n1.date && n2.date) {
      if (n1.date > n2.date) {
        return 1;
      }

      if (n1.date < n2.date) {
        return -1;
      }
    }

    return 0;
  });
}

type PostIds = Pick<PostData, 'id'>;
export function getAllPostIds(): PostIds[] {
  const filenames = fs.readdirSync(postsDirectory);

  // return array like
  // [
  //   {
  //     id: 'ssg-ssr'
  //   }
  // ]
  //   {
  //     id: 'pre-rendering'
  //   }
  // ]
  return filenames.map((filename) => {
    return {
      id: filename.replace(/\.md$/u, ''),
    };
  });
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // use gray-matter to parse post metadata section
  const matterResult = matter(fileContents);

  // use remark to convert markdown into html string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

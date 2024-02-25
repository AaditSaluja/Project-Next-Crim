// uou won't need other imports
import fs from 'fs'
import path from 'path'

// gets path to `articles` dir in current working dir
const root = path.join(process.cwd(), 'articles')

export async function getSlugs(): Promise<string[]> {
  // TODO: return discovered slugs in filesystem from `root`
  const files = fs.readdirSync(root);

  const slugs = files.map(file => file.split('.')[0]);

  return slugs;
}

export async function getArticle(slug: string): Promise<string> {
  // TODO: get the text from a markdown file with the given `slug`
  // `slug` can be, e.g., `hello-world`, `the-success`, etc.
  const filePath = path.join(root + '/' + slug + '.md');
  console.log(filePath);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } catch (error) {
    return "No Such Article Found!"
  }
}

export async function postArticle(slug: string, content: string): Promise<boolean> {
  // TODO: create markdown file in filesystem with slug and content
  // return `true` on success
  // must handle any errors and exceptions -> should then return `false`
  const filePath = path.join(root + '/' + slug + '.md');
  try {
    fs.writeFileSync(filePath, content, 'utf8')
    return true
  } catch (error) {
    return false
  }
}

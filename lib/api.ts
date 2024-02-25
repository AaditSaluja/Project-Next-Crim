// uou won't need other imports
import fs from 'fs'
import path from 'path'

// gets path to `articles` dir in current working dir
const root = path.join(process.cwd(), 'articles')

export async function getSlugs(): Promise<string[]> {
  // TODO: return discovered slugs in filesystem from `root`
  return ['hello-world', 'the-success']
}

export async function getArticle(slug: string): string {
  // TODO: get the text from a markdown file with the given `slug`
  // `slug` can be, e.g., `hello-world`, `the-success`, etc.
  const text = 'Not implemented.'
  return text
}

export async function postArticle(slug: string, content: string): boolean {
  // TODO: create markdown file in filesystem with slug and content
  // return `true` on success
  // must handle any errors and exceptions -> should then return `false`
}

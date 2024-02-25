import { getArticle } from '@/lib/api'

export default function ArticlePage() {
  // TODO: get `slug` and use to get article
  // please do not use hacky URL mutations
  // check Next.js docs :)
  const article = getArticle()
  return <>{article}</>
}

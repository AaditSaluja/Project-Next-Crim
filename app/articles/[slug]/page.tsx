import { getArticle } from '@/lib/api'
import Link from 'next/link'

// export default function ArticlePage(slug: string) {
  // TODO: get `slug` and use to get article
  // please do not use hacky URL mutations
  // check Next.js docs :)
  export default function ArticlePage({params}: {
    params: { slug: string }
  }) {
  return getArticle(params.slug).then(function (param) {
    let raw_text = param.split('\n').map(
      txt => <p>{txt}</p>
    )
    return (
      <main>
          <div>{raw_text}</div> 
          <Link href='/'>Return</Link>
      </main>
    )
  })
}


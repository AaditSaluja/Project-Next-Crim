import Link from 'next/link'
import styles from './page.module.css'
import { getSlugs } from '@/lib/api'

async function getLinks(): Promise<
  {
    name: string
    href: string
  }[]
> {
  // TODO: make this dynamically query
  // hint: `getSlugs`
  return [
    {
      name: 'Hello World',
      href: '/articles/hello-world',
    },
    {
      name: 'The Success',
      href: '/articles/the-success',
    },
  ]
}

export default async function Home() {
  const links = await getLinks()
  return (
    <>
      <main>
        <ul>
          {
            // TODO: use `map` to render links with `Link` component
            // wrapped in ? elements
          }
        </ul>
      </main>

      {
        // TODO: use Next.js server actions to
        // ultimately `postArticle` in `api.ts`
        // there are also HTML attribute problems
      }
      <form className={styles.articleForm}>
        <textarea className={styles.articleEditor} />
        <button>Post Article</button>
      </form>
    </>
  )
}

import Link from 'next/link'
import styles from './page.module.css'
import { getSlugs, postArticle } from '@/lib/api'
import { revalidatePath } from 'next/cache'

async function getLinks(): Promise<
  {
    name: string;
    href: string;
  }[]
> {
  // TODO: make this dynamically query
  // hint: `getSlugs`

  const slugs = await getSlugs();

  return slugs.map(slug => {
    let name = slug.split('-')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
    name = decodeURIComponent(name);

    return {
      name: name,
      href: `/articles/${slug}`,
    };
  });
}

export default async function Home() {
  const links = await getLinks()

  const pushArticle = async (formData: FormData) => {
    "use server"

    let content = formData.get('content')

    content = (content !== null) ? content.toString() : ''

    const words = content.split(' ');
    let slug = words.length >= 2 ? `${words[0]}-${words[1]}` : words[0] || 'default-slug'; // didn't see much information about what to use as slug so just using the first two words right now
    slug = slug.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();

    postArticle(slug, content)

    revalidatePath('/')
  }

  return (
    <>
      <main>
        <ul>
          {
            // TODO: use `map` to render links with `Link` component
            // wrapped in ? elements
            links.map(({name, href}) => (
              <li key={name}>
                <Link href={href}>
                  {name}
                </Link>
              </li>
            ))
          }
        </ul>
      </main>

      {
        // TODO: use Next.js server actions to
        // ultimately `postArticle` in `api.ts`
        // there are also HTML attribute problems
      }
      <form className={styles.articleForm} action={pushArticle}>
        <textarea className={styles.articleEditor} name='content'/>
        <button>Post Article</button>
      </form>
    </>
  )
}

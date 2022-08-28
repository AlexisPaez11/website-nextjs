import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const lastedFiles = files.slice(0,1)
  const posts = lastedFiles.map((fileName) => {
      const slug = fileName.replace('.mdx', '');
      const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const { data: metadata } = matter(readFile);
      
      return {
          slug,
          metadata
        }
    })
    
    return {
        props: {
            posts
        }
    }
}

export default function Home({ posts }) {
  return (
    <PageLayout>
      {posts.map(({ slug, metadata }) => (
        <Link key={slug} href={`/post/${slug}`}>
          <a>
          <article className='article-card grid grid-flow-row p-2 gap-2 rounded-xl'>
                <div className='category grid grid-flow-col justify-start items-center gap-3'>
                  {/* <>{metadata.categoryImg}</> */}
                  <p className='text-base font-medium'>{metadata.category}</p>
                </div>
                <Image
                  className='rounded-lg object-cover text-center'
                  src={metadata.image}
                  alt={`Imagen para el articulo ${metadata.alt}`}
                  height='55'
                  width='100%'
                  objectFit='cover'
                  layout='responsive'
                  quality={100}
                />
                <h3 className='text-xl font-bold {/*h-14*/} overflow-hidden text-ellipsis'>{metadata.title}</h3>
                <time className='text-lg' dateTime={metadata.dateTime}>{metadata.date}</time>
              </article>
          </a>
        </Link>
      ))}
    </PageLayout>
  )
}

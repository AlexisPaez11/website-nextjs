import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'
import Search from '../components/Search'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Blog({ posts }) {
  return (
    <PageLayout>
      <section className=''>
        <div className=''>
          {posts.map(({ slug, metadata }) => (
            <Link key={slug} href={`/post/${slug}`}>
              <a>
              <article className=''>
                <div className=''>
                  {/* <>{metadata.categoryImg}</> */}
                  <p className=''>{metadata.category}</p>
                </div>
                <Image
                  className=''
                  src={metadata.image}
                  alt={`Imagen para el articulo ${metadata.alt}`}
                  height='55'
                  width='100%'
                  objectFit='cover'
                  layout='responsive'
                  quality={100}
                  />
                <h3 className=''>{metadata.title}</h3>
                <time className='' dateTime={metadata.dateTime}>{metadata.date}</time>
              </article>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}

export async function getStaticProps() {
  // Get all our posts
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
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

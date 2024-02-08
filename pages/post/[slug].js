import PageLayout from '../../components/PageLayout'
import fs from 'fs'
import matter from 'gray-matter'
import mdx from 'markdown-it'

export async function getStaticPaths() {
    // Retrieve all our slugs
    const files = fs.readdirSync('posts')
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.mdx', '')
        }
    }))
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.mdx`, 'utf-8');
    const { data: metadata, content } = matter(fileName);

    return {
        props: {
            metadata,
            content
        }
    }
}

export default function PostPage({ metadata, content }) {
    return (
        <PageLayout>
            <h1>{metadata.title}</h1>
            <time>{metadata.date}</time>
            <div dangerouslySetInnerHTML={{__html: mdx().render(content) }} />
        </PageLayout>
    )
}
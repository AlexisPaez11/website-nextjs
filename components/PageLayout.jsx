import Head from "next/head";
import Nav from '../components/Nav'
// import Footer from '../components/Footer'

export default function PageLayout ({children, title = 'Alexis Paez | Frontend Developer'}) {
    return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={title} />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav/>

        <main>
            {children}
        </main>

        {/* <Footer/> */}
    </>
    )
}
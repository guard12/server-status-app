import Link from 'next/link'
import Head from 'next/head'
import { Navbar } from './navbar'
import { Footer } from './footer'

export const Layout = ({ children, title }) => {
    return <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
       
        <Navbar />

        {children}
        
        <Footer />
    </>
}
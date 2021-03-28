import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

import { Navbar } from './navbar'
import { Footer } from './footer'

const Page = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    height: 100%;
`

export const Layout = ({ children, title }) => {
    return <Page>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
       
        <Navbar />

        {children}
        
        <Footer />
    </Page>
}
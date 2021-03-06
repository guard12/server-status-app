import React from 'react'
import Head from 'next/head'

import { Navbar } from './navbar'
import { Footer } from './footer'
import { PageStyled } from './styles'

export const Layout = ({ children, title }) => {
    return <PageStyled>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
       
        <Navbar />

        {children}
        
        <Footer />
    </PageStyled>
}
import React from 'react'
import { NavBarWrapperStyled, NavBarComponentStyled, LinkStyled } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
    const { pathname } = useRouter()

    return <NavBarWrapperStyled>
        <NavBarComponentStyled>
                <Link href='/' passHref>
                    <LinkStyled active={pathname === '/'}>Home</LinkStyled>
                </Link>
                <Link href='/dashboard' passHref>
                    <LinkStyled active={pathname === '/dashboard'}>Dashboard</LinkStyled>
                </Link>
        </NavBarComponentStyled>
    </NavBarWrapperStyled>
}
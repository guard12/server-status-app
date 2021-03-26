import React from 'react'
import { NavBarComponent } from '../styles'
import Link from 'next/link'

export const Navbar = () => {
    return <NavBarComponent>
        <Link href='/'>
            Admin
        </Link>
        <Link href='/dashboard'>
            Dashboard
        </Link>
    </NavBarComponent>
}
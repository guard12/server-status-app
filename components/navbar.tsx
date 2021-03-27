import { NavBarWrapper, NavBarComponent, StyledLink, Links } from '../styles'
import Link from 'next/link'

export const Navbar = () => {
    return <NavBarWrapper>
        <NavBarComponent>
            <Links>
                <Link href='/' passHref>
                    <StyledLink>Admin</StyledLink>
                </Link>
                <Link href='/dashboard' passHref>
                    <StyledLink>Dashboard</StyledLink>
                </Link>
            </Links>
        </NavBarComponent>
    </NavBarWrapper>
}
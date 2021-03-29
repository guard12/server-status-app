import { NavBarWrapper, NavBarComponent, StyledLink, Links } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
    const { pathname } = useRouter()

    return <NavBarWrapper>
        <NavBarComponent>
                <Link href='/' passHref>
                    <StyledLink active={pathname === '/'}>Home</StyledLink>
                </Link>
                <Link href='/dashboard' passHref>
                    <StyledLink active={pathname === '/dashboard'}>Dashboard</StyledLink>
                </Link>
        </NavBarComponent>
    </NavBarWrapper>
}
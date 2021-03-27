import styled from 'styled-components'

export const NavBarWrapper = styled.header`
    background: ${({ theme }) => theme.colors.primary};
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    z-index: 1000;
    justify-content: center;
`

export const NavBarComponent = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
`

export const Links = styled.div`
    align-items: center;
`

export const StyledLink = styled.a`
    margin-left: 1rem;
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
`
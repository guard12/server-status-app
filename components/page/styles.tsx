import styled from 'styled-components'

export const NavBarWrapperStyled = styled.header`
    background: ${({ theme }) => theme.colors.primary};
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    z-index: 1000;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`

export const NavBarComponentStyled = styled.nav`
    height: 60px;
    display: flex;
    width: 100%;
    align-items: center;
`

interface LinkStyledProps {
    readonly active: boolean
}

export const LinkStyled = styled.div<LinkStyledProps>`
    cursor: pointer;
    color: ${(props) => props.active ? props.theme.colors.primary : props.theme.colors.secondary};
    background-color: ${(props) => props.active ? props.theme.colors.secondary : props.theme.colors.primary};
    flex: 1;
    height: 100%;
	justify-content: center;
	display: flex;
	align-items: center;
    &:hover {
        background-color: ${({ theme }) => theme.colors.hoverColor};
        color: ${({ theme }) => theme.colors.secondary};
    }
`

export const FooterStyled = styled.footer`
    width: 100%;
    bottom: 0;
    position: fixed;
    justify-content: center;
    align-items: center;
    height: 48px;
    background: ${({ theme }) => theme.colors.primary};
    display: flex;
    border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.secondary};    
`
export const PageStyled = styled.div`
    background: ${({ theme }) => theme.colors.background};
    height: 100%;
`
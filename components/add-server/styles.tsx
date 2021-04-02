import styled from 'styled-components'

export const AddServerButtonStyled = styled.button`
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 1em;
	padding: 0.25em 1em;
	border: 2px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 3px;
	cursor: pointer;
	width: 200px;
	&:hover {
		background: ${({ theme }) => theme.colors.hoverColor};
		color: ${({ theme }) => theme.colors.secondary};
	}
`
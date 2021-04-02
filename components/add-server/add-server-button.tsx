import Link from 'next/link'

import { AddServerButtonStyled } from './styles'

export function AddServerButton() {
	return <Link href='/add-server'>
		<AddServerButtonStyled
	>
		+ Add server
	</AddServerButtonStyled>
	</Link>
}
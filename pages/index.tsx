
import styled from 'styled-components'
import { ServerCard } from '../src/components/server-card'

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.primary};
`

export default function HomePage() {
	return <>
	<Title>Hello Server</Title>
	<ServerCard/>
	</>
}
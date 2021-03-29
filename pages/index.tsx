
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Layout } from '../components/page/layout'

const Title = styled(motion.h1)`
	color: ${({ theme }) => theme.colors.secondary};
	text-align: center;
`

export default function HomePage() {
	return <Layout title="Home">	
		<Title
			layoutId="title"
			initial={{ scale: 0.8, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
		>
			<h2>Hello there!</h2>
			<p>Welcome to my server monitoring tool.</p>
		</Title>
	</Layout>
}
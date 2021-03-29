
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Layout } from '../components/page/layout'

const Title = styled(motion.div)`
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
			<h1>Hello there!</h1>
			<h3>Welcome to my server monitoring tool.</h3>
		</Title>
	</Layout>
}
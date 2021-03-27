
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Layout } from '../components/page/layout'

const Title = styled(motion.h1)`
	color: ${({ theme }) => theme.colors.secondary};
`

export default function HomePage() {
	return <Layout title="Admin">	
		<Title
			layoutId="title"
			initial={{ scale: 0.8, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
		>
			Hello Admin
		</Title>
	</Layout>
}
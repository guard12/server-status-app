import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Layout } from '../components/page/layout'
import { useDarkMode } from '../hooks/useDarkMode'

const Title = styled(motion.div)`
	color: ${({ theme }) => theme.colors.secondary};
	padding: ${({ theme }) => theme.spacing.xl};
	text-align: center;
`

const Button = styled.button`
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 1em;
	padding: 0.25em 1em;
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 3px;
	cursor: pointer;
	width: 200px;
	&:hover {
		background: ${({ theme }) => theme.colors.hoverColor};
		color: ${({ theme }) => theme.colors.secondary};
	}
`

export default function HomePage() {
	const { isDarkMode, toggleThemeMode } = useDarkMode()

	return <Layout title="Home">	
		<Title
			layoutId="title"
			initial={{ scale: 0.8, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
		>
			<h1>Hello there!</h1>
			<h3>Welcome to my server monitoring tool.</h3>
			<Button
				onClick={() => {
					toggleThemeMode()
				}}
			>
				{ isDarkMode ? "Go light" : "Go dark" }
			</Button>
		</Title>
	</Layout>
}
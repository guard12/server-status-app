
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from "next/link"

import { Navbar } from '../src/components/navbar'

const Title = styled(motion.h1)`
	color: ${({ theme }) => theme.colors.primary};
`

const Button = styled.button`

`

export default function HomePage() {
	return <>
	<Navbar />
	<Title
		layoutId="title"
		initial={{ scale: 0.8, opacity: 0 }}
  		animate={{ scale: 1, opacity: 1 }}
	>
		Hello Server
	</Title>
	</>
}
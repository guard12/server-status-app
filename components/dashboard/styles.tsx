import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ServerContainer = styled.ul`
	margin: 0;
	padding: 0 20px 20px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: space-between;
	list-style: none;
`

export const ServerItem = styled(motion.li)`
	border-radius: 10px;
	padding: 20px;
	cursor: pointer;
	margin: 20px 0 0 20px;
	flex: 1 1 100px;
	background: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.primary};
`

export const Overlay = styled(motion.div)`
	background: white;
	opacity: 0.2;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`

export const SingleServerContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none;
`

export const SingleServerStyled = styled(motion.div)`
	border-radius: 20px;
	width: 1280px;
	height: 300px;
	background: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.md};
`

export const DashboardWrappper = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.spacing.md};
    justify-content: center;
    flex-direction: column;
`

export const PageHeader = styled.h1`
    align-self: center;
`
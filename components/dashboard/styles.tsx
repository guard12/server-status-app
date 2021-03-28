import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ServerState } from '../../types/server'

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
	display: flex;
	background: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.primary};
`

export const ServerItemContent = styled.div`
	margin-left: ${({ theme }) => theme.spacing.md};
	display: flex;
	flex-wrap: wrap;
	flex-shrink: 2;
`

export const ServerItemContentDetail = styled.div`
	flex: 1 0 100%;
`

export const Overlay = styled(motion.div)`
	background: ${({ theme }) => theme.colors.primary};;
	opacity: 0.2;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 1;
  	will-change: opacity;
`

export const SingleServerContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const SingleServerStyled = styled(motion.div)`
	border-radius: 20px;
	background: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.md};
	z-index: 50;
	max-width: 1280px;
	min-width: 300px;
	flex-grow: 1;
`
export const SingleServerDetail = styled.div`
	display: block;
`

export const SingleServerDetailSpan = styled.div`
	font-weight: 800;
`

export const DashboardWrappper = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.spacing.md};
    justify-content: center;
    flex-direction: column;
`

export const PageHeader = styled.h1`
    align-self: center;
	color: ${({ theme }) => theme.colors.secondary};
`

interface StatusProps {
	readonly status: ServerState
}

export const Status = styled.div<StatusProps>`
	width: 10px;
    height: 10px;
    background-color: ${props => {
		switch(props.status) {
			case "active":
				return "#690"
			case "inactive":
				return "#4AB"
			case "panic":
				return "#940"
			case "unavailable":
				return "#A90"
		}
	}};
    border-radius: 50%;
	margin: 0px 5px;
`

export const GoogleMap = styled.div`
	min-width: 300px;
	height: 400px;
	display: flex;
`
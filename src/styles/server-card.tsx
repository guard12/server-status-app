import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ServerCardWrapper = styled(motion.div)`
	background-color: lightgray;
	width: 200px;
	padding: 20px;
	display: flex;
	flex-direction: column;
`

export const ServerCardItem = styled(motion.div)`
	background-color: white;
	padding: 20px;
	margin-bottom: 20px;
	cursor: pointer;
	overflow: hidden;
`

export const ServerCardAvatar = styled(motion.div)`
	background-color: #666;
	border-radius: 20px;
	width: 40px;
    height: 40px;
`

export const ServerCardInfo = styled.div`
	width: 100%;
	height: 8px;
	background-color: #999;
	border-radius: 10px;
	margin-top: 12px;
`
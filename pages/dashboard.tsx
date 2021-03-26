import React from 'react'
import { motion } from 'framer-motion'
import {ServerCard } from '../src/components/server-card'

export const Dashboard = () => {
	return <motion.div 
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ delay: 0.2 }}
	>
		<ServerCard/>
	</motion.div>
}

export default Dashboard
import React from 'react'
import { motion } from 'framer-motion'

import { Layout } from '../components/layout'
import { ServerCard } from '../components/server-card'

export const Dashboard = () => {
	return <Layout title="Dashboard">
		<motion.div 
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ delay: 0.2 }}
		>
			<ServerCard/>
		</motion.div>
	</Layout>
}

export default Dashboard
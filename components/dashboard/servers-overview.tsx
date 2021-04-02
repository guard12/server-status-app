import React, { useState } from 'react'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { useStoreState } from '../../store/hooks'
//import useSWR from 'swr'
//import { fetcher } from '../../api/fetcher'
//import { Server } from '../../types/server'

import { Overlay } from './styles'
import { ServerList } from './server-list'
import { ServerCard } from './server-card'

export function ServersOverview() {
	/* Unused in production, can work locally with correct setup
	const { data , error } = useSWR("http://localhost:2020/get-overview", fetcher, { revalidateOnFocus: false, refreshInterval: 10000})
	if(error) return <div>Failed to load the servers</div>
	if(!data) return <div>Loading...</div>
	
	const servers: Server[] = data.servers*/
	const [selectedId, setSelectedId] = useState(null)
	const servers = useStoreState(state => state.servers)
	const selectedServer = servers.find(server => server.id === selectedId)
	
	return <AnimateSharedLayout type="crossfade">
		<ServerList items={servers} setSelectedId={setSelectedId} />
		<AnimatePresence>
		  {selectedId != null && (
			<Overlay
				key="overlay"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.6 }}
				exit={{ opacity: 0 }}
				onClick={() => {
					setSelectedId(null)
				}}
			/>
		  )}
  
		  {selectedId !== null && (
			<ServerCard
				key="card"
				server={selectedServer}
				onClick={() => {
					setSelectedId(null)
				}}
			/>
		  )}
		</AnimatePresence>
	  </AnimateSharedLayout>
  }
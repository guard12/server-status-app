import React, { useState } from "react"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
//import useSWR from 'swr'

//import { fetcher } from '../../api/fetcher'
import { Overlay } from './styles'
import { Server } from '../../types/server'
import { ServerList } from './server-list'
import { ServerCard } from './server-card'

export function ServersOverview() {
	//const { data , error } = useSWR("http://localhost:2020/get-overview", fetcher, { revalidateOnFocus: false, refreshInterval: 10000})
	const [selectedId, setSelectedId] = useState(null)

	//if(error) return <div>Failed to load the servers</div>
	//if(!data) return <div>Loading...</div>
	
	//const servers: Server[] = data.servers
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

  const servers: Server[] = [
	{
		id: "1",
		name: "server 1",
		avgUptime: "3hrs",
		status: "active",
		ip: "192.168.3.3",
		lastSeen: "12:00",
		lastMessage: "ping",
		location: "Bratislava",
	},
	{
		id: "2",
		name: "server 2",
		avgUptime: "4hrs",
		status: "inactive",
		ip: "192.168.3.4",
		lastSeen: "11:00",
		lastMessage: "pong",
		location: "Copenhagen",
	},
	{
		id: "3",
		name: "server 3",
		avgUptime: "5hrs",
		status: "unavailable",
		ip: "192.168.3.7",
		lastSeen: "14:00",
		lastMessage: "exploding",
		location: "Boca Chica",
	},
	{
		id: "4",
		name: "server 4",
		avgUptime: "55hrs",
		status: "panic",
		ip: "192.168.3.777",
		lastSeen: "19:00",
		lastMessage: "exploding in 3..2..",
		location: "Boca Chica",
	}
]
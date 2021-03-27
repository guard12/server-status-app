import React, { useState } from "react"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"

import { ServerContainer, ServerItem, SingleServerContainer, SingleServerStyled, Overlay } from './styles'
import { Server } from '../../types/server'

export function ServersOverview() {
	const [selectedId, setSelectedId] = useState(null);
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
				onClick={() => setSelectedId(null)}
			/>
		  )}
  
		  {selectedId !== null && (
			<ServerCard
				key="card"
				server={selectedServer}
				onClick={() => setSelectedId(null)}
			/>
		  )}
		</AnimatePresence>
	  </AnimateSharedLayout>
  }

function ServerList({ items, setSelectedId }) {
  return (
	<ServerContainer>
	  {items.map((server) => (
		<ServerItem
		  key={server.id}
		  onClick={() => setSelectedId(server.id)}
		  layoutId={server.id}
		>
			<div>Name: {server.name}</div>
			<div>Average uptime: {server.avgUptime}</div>
			<div>Status: {server.status}</div>
		</ServerItem>
	  ))}
	</ServerContainer>
  );
}

function ServerCard({ server, onClick }) {
  return (
	<SingleServerContainer onClick={onClick}>
	  <SingleServerStyled
		layoutId={server.id}
	  >
		<div>{server.name}</div>
		<div>{server.avgUptime}</div>
		<div>{server.status}</div>
		<div>{server.ip}</div>
		<div>{server.id}</div>
		<div>{server.lastSeen}</div>
		<div>{server.lastMessage}</div>
		<div>{server.location}</div>
	  </SingleServerStyled>
	</SingleServerContainer>
  );
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
		location: "turkey",
	},
	{
		id: "2",
		name: "server 2",
		avgUptime: "4hrs",
		status: "inactive",
		ip: "192.168.3.4",
		lastSeen: "11:00",
		lastMessage: "pong",
		location: "denmark",
	},
	{
		id: "3",
		name: "server 3",
		avgUptime: "5hrs",
		status: "unavailable",
		ip: "192.168.3.7",
		lastSeen: "14:00",
		lastMessage: "exploding",
		location: "usa",
	}
]
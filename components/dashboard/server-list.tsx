import React from 'react'
import { ServerContainerStyled, ServerItemStyled, StatusStyled, ServerItemContentStyled, ServerItemContentDetailStyled } from './styles'
import { ServerIcon } from '../icons/server-icon'

export function ServerList({ items, setSelectedId }) {
	return (
		<ServerContainerStyled>
			{items.map((server) => (
				<ServerItemStyled
					key={server.id}
					onClick={() => setSelectedId(server.id)}
					layoutId={server.id}
				>
				<div style={{ display: "flex"}}>
					<ServerIcon />
					<ServerItemContentStyled>
						<ServerItemContentDetailStyled><strong>Name:</strong> {server.name}</ServerItemContentDetailStyled>
						<ServerItemContentDetailStyled><strong>Average uptime: </strong>{server.avgUptime}</ServerItemContentDetailStyled>
						<ServerItemContentDetailStyled style={{display: "flex", alignItems: "baseline"}}>
							<strong>Status:</strong> <StatusStyled status={server.status}/> {server.status}
						</ServerItemContentDetailStyled>
					</ServerItemContentStyled>
				</div>
				</ServerItemStyled>
			))}
		</ServerContainerStyled>
		)
}
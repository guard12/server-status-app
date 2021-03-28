import { ServerContainer, ServerItem, Status, ServerItemContent, ServerItemContentDetail } from './styles'
import { ServerIcon } from '../icons/server-icon'

export function ServerList({ items, setSelectedId }) {
	return (
		<ServerContainer>
			{items.map((server) => (
				<ServerItem
					key={server.id}
					onClick={() => setSelectedId(server.id)}
					layoutId={server.id}
				>
				<div style={{ display: 'flex'}}>
					<ServerIcon />
					<ServerItemContent>
						<ServerItemContentDetail><strong>Name:</strong> {server.name}</ServerItemContentDetail>
						<ServerItemContentDetail><strong>Average uptime: </strong>{server.avgUptime}</ServerItemContentDetail>
						<ServerItemContentDetail style={{display: "flex", alignItems: "baseline"}}>
							<strong>Status:</strong> <Status status={server.status}/> {server.status}
						</ServerItemContentDetail>
					</ServerItemContent>
				</div>
				</ServerItem>
			))}
		</ServerContainer>
		)
}
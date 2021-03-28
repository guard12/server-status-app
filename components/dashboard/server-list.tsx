import { ServerContainer, ServerItem, Status } from './styles'

export function ServerList({ items, setSelectedId }) {
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
              <div style={{display: "flex", alignItems: "baseline"}}>Status: <Status status={server.status}/> {server.status}</div>
          </ServerItem>
        ))}
      </ServerContainer>
    )
  }
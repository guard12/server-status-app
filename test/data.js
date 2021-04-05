const servers = [
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

module.exports = servers
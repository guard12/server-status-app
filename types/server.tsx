export interface Server { 
    id: string;
    name: string;
    avgUptime: string;
    status: ServerState;
    ip: string;
    lastSeen: string;
    lastMessage: string;
    location: string;
}

export type ServerState = 
    | 'active'
    | 'inactive'
    | 'panic'
    | 'unavailable'

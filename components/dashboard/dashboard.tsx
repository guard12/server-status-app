import React from 'react'

import { DashboardWrappper, PageHeader } from './styles'
import { ServersOverview } from './servers-overview'
import { AddServerButton } from '../add-server/add-server-button'

export function Dashboard() {
	return <DashboardWrappper>
        <PageHeader>Dashboard</PageHeader>
        <AddServerButton/>
        <ServersOverview />
    </DashboardWrappper>
}
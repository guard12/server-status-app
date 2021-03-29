import React from 'react'

import { DashboardWrappper, PageHeader } from './styles'
import { ServersOverview } from './servers-overview'

export function Dashboard() {
	return <DashboardWrappper>
        <PageHeader>Dashboard</PageHeader>
        <ServersOverview />
    </DashboardWrappper>
}
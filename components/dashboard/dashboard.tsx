import React from 'react'

import { DashboardWrappper, PageHeader } from './styles'
import { ServersOverview } from './servers-overview'
import { getServerInfo } from '../../api/get-server-data'

export function Dashboard() {
    const data = getServerInfo()

    console.log(data)
	return <DashboardWrappper>
        <PageHeader>Dashboard</PageHeader>
        <ServersOverview />

        <PageHeader>Custom Servers</PageHeader>
    </DashboardWrappper>
}
import React from 'react'

import { DashboardWrappperStyled, PageHeaderStyled } from './styles'
import { ServersOverview } from './servers-overview'
import { AddServerButton } from '../add-server/add-server-button'

export function Dashboard() {
	return <DashboardWrappperStyled>
        <PageHeaderStyled>Dashboard</PageHeaderStyled>
        <AddServerButton/>
        <ServersOverview />
    </DashboardWrappperStyled>
}
import React, { useRef, useEffect } from 'react'

import { 
	SingleServerContainer, SingleServerStyled, GoogleMap, 
	SingleServerDetail, SingleServerDetailBlock, SingleServerDetailWrapper,
	ClosePopupButton
} from './styles'
import { serverLocation } from '../../api/google-maps'
import { TimesIcon } from '../icons/times-icon'

export function ServerCard({ server, onClick }) {
	let googleMapRef = useRef(null)

	useEffect(() => {
		const loadMap = async () => {
			await serverLocation(googleMapRef, server.location)
		}
		loadMap()
	}, [])

	return (
	  <SingleServerContainer exit={{ opacity: 0 }}>
		<SingleServerStyled
		  layoutId={server.id}
		>
		<ClosePopupButton onClick={onClick}><TimesIcon /></ClosePopupButton>
		<SingleServerDetailWrapper>
			<SingleServerDetail>
				<SingleServerDetailBlock><strong>Name: </strong>{server.name}</SingleServerDetailBlock>
				<SingleServerDetailBlock><strong>Average uptime: </strong>{server.avgUptime}</SingleServerDetailBlock>
			</SingleServerDetail>
			<SingleServerDetail>
				<SingleServerDetailBlock><strong>Status: </strong>{server.status}</SingleServerDetailBlock>
				<SingleServerDetailBlock><strong>IP address: </strong>{server.ip}</SingleServerDetailBlock>
			</SingleServerDetail>
			<SingleServerDetail>
				<SingleServerDetailBlock><strong>ID: </strong>{server.id}</SingleServerDetailBlock>
				<SingleServerDetailBlock><strong>Last seen: </strong>{server.lastSeen}</SingleServerDetailBlock>
			</SingleServerDetail>
			<SingleServerDetail>
				<SingleServerDetailBlock><strong>Last message: </strong>{server.lastMessage}</SingleServerDetailBlock>
				<SingleServerDetailBlock><strong>Location: </strong>{server.location}</SingleServerDetailBlock>
			</SingleServerDetail>
		</SingleServerDetailWrapper>
		<GoogleMap ref={googleMapRef}/>
		</SingleServerStyled>
	  </SingleServerContainer>
	)
  }
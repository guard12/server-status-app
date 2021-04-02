import React, { useRef, useEffect } from 'react'

import { 
	SingleServerContainer, SingleServerStyled, GoogleMap, 
	SingleServerDetail, SingleServerDetailBlock, SingleServerDetailWrapper,
	ClosePopupButton, StyledPopupTitle, SingleServerDetailTitle
} from './styles'
import { serverLocation } from '../../api/google-maps'

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
			<div>
				<ClosePopupButton onClick={onClick}>&times;</ClosePopupButton>
				<StyledPopupTitle>Server details</StyledPopupTitle>
			</div>
			<SingleServerDetailWrapper>
				<SingleServerDetail>
					<SingleServerDetailBlock>
						<SingleServerDetailTitle>Name:</SingleServerDetailTitle>
						{server.name}
					</SingleServerDetailBlock>
					<SingleServerDetailBlock>
						<SingleServerDetailTitle>Average uptime: </SingleServerDetailTitle>
						{server.avgUptime}
					</SingleServerDetailBlock>
				</SingleServerDetail>
				<SingleServerDetail>
					<SingleServerDetailBlock>
						<SingleServerDetailTitle>Status: </SingleServerDetailTitle>
						{server.status}
					</SingleServerDetailBlock>
					<SingleServerDetailBlock>
						<SingleServerDetailTitle>IP address: </SingleServerDetailTitle>
						{server.ip}
					</SingleServerDetailBlock>
				</SingleServerDetail>
				<SingleServerDetail>
					<SingleServerDetailBlock>
						<SingleServerDetailTitle>ID: </SingleServerDetailTitle>
						{server.id}
					</SingleServerDetailBlock>
					<SingleServerDetailBlock>
						<SingleServerDetailTitle>Last seen: </SingleServerDetailTitle>
						{server.lastSeen}
					</SingleServerDetailBlock>
				</SingleServerDetail>
				<SingleServerDetail>
					<SingleServerDetailBlock>
						<SingleServerDetailTitle>Last message: </SingleServerDetailTitle>
						{server.lastMessage}
					</SingleServerDetailBlock>
					<SingleServerDetailBlock>
						<SingleServerDetailTitle>Location: </SingleServerDetailTitle>
						{server.location}
					</SingleServerDetailBlock>
				</SingleServerDetail>
			</SingleServerDetailWrapper>

			<StyledPopupTitle>Server location</StyledPopupTitle>

			<GoogleMap ref={googleMapRef}/>
		</SingleServerStyled>
	  </SingleServerContainer>
	)
  }
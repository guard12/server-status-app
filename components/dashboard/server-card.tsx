import React, { useRef, useEffect } from 'react'

import { 
	SingleServerContainerStyled, SingleServerStyled, GoogleMapStyled, 
	SingleServerDetailStyled, SingleServerDetailBlockStyled, SingleServerDetailWrapperStyled,
	ClosePopupButtonStyled, PopupTitleStyled, SingleServerDetailTitleStyled
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
	  <SingleServerContainerStyled exit={{ opacity: 0 }}>
		<SingleServerStyled
		  layoutId={server.id}
		>
			<div>
				<ClosePopupButtonStyled onClick={onClick}>&times;</ClosePopupButtonStyled>
				<PopupTitleStyled>Server details</PopupTitleStyled>
			</div>
			<SingleServerDetailWrapperStyled>
				<SingleServerDetailStyled>
					<SingleServerDetailBlockStyled>
						<SingleServerDetailTitleStyled>Name:</SingleServerDetailTitleStyled>
						{server.name}
					</SingleServerDetailBlockStyled>
					<SingleServerDetailBlockStyled>
						<SingleServerDetailTitleStyled>Average uptime: </SingleServerDetailTitleStyled>
						{server.avgUptime}
					</SingleServerDetailBlockStyled>
				</SingleServerDetailStyled>
				<SingleServerDetailStyled>
					<SingleServerDetailBlockStyled>
						<SingleServerDetailTitleStyled>Status: </SingleServerDetailTitleStyled>
						{server.status}
					</SingleServerDetailBlockStyled>
					<SingleServerDetailBlockStyled>
						<SingleServerDetailTitleStyled>IP address: </SingleServerDetailTitleStyled>
						{server.ip}
					</SingleServerDetailBlockStyled>
				</SingleServerDetailStyled>
				<SingleServerDetailStyled>
					<SingleServerDetailBlockStyled>
						<SingleServerDetailTitleStyled>ID: </SingleServerDetailTitleStyled>
						{server.id}
					</SingleServerDetailBlockStyled>
					<SingleServerDetailBlockStyled>
						<SingleServerDetailTitleStyled>Last seen: </SingleServerDetailTitleStyled>
						{server.lastSeen}
					</SingleServerDetailBlockStyled>
				</SingleServerDetailStyled>
				<SingleServerDetailStyled>
					<SingleServerDetailBlockStyled>
						<SingleServerDetailTitleStyled>Last message: </SingleServerDetailTitleStyled>
						{server.lastMessage}
					</SingleServerDetailBlockStyled>
					<SingleServerDetailBlockStyled>
						<SingleServerDetailTitleStyled>Location: </SingleServerDetailTitleStyled>
						{server.location}
					</SingleServerDetailBlockStyled>
				</SingleServerDetailStyled>
			</SingleServerDetailWrapperStyled>

			<PopupTitleStyled>Server location</PopupTitleStyled>

			<GoogleMapStyled ref={googleMapRef}/>
		</SingleServerStyled>
	  </SingleServerContainerStyled>
	)
  }
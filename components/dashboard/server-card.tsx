import React, { useRef, useEffect } from 'react'

import { SingleServerContainer, SingleServerStyled, GoogleMap, SingleServerDetail, SingleServerDetailSpan } from './styles'
import { serverLocation } from '../../api/google-maps'

export function ServerCard({ server, onClick }) {
	let googleMapRef = useRef(null)

	useEffect(() => {
		const loadMap = async () => {
			await serverLocation(googleMapRef, server.location)
		}
		//loadMap()
	}, [])

	return (
	  <SingleServerContainer exit={{ opacity: 0 }}>
		<SingleServerStyled
		  layoutId={server.id}
		>
		<SingleServerDetail>
			<SingleServerDetailSpan>Name:</SingleServerDetailSpan> {server.name}
			<SingleServerDetailSpan>Average uptime:</SingleServerDetailSpan> {server.avgUptime}
			<SingleServerDetailSpan>Status:</SingleServerDetailSpan> {server.status}
			<SingleServerDetailSpan>IP address:</SingleServerDetailSpan> {server.ip}
		</SingleServerDetail>
		<SingleServerDetail>
			<SingleServerDetailSpan>ID:</SingleServerDetailSpan>{server.id}
			<SingleServerDetailSpan>Last seen:</SingleServerDetailSpan> {server.lastSeen}
			<SingleServerDetailSpan>Last message:</SingleServerDetailSpan> {server.lastMessage}
			<SingleServerDetailSpan>Location:</SingleServerDetailSpan> {server.location}
		</SingleServerDetail>
		<GoogleMap ref={googleMapRef}/>
		<button onClick={onClick}>Close</button>
		</SingleServerStyled>
	  </SingleServerContainer>
	)
  }
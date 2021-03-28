import React, { useRef, useEffect, useState } from 'react'
import { Loader } from "@googlemaps/js-api-loader"

import { SingleServerContainer, SingleServerStyled } from './styles'
import { serverLocation } from './server-location'

export function ServerCard({ server, onClick }) {
    const [isMapLoaded, setIsMapLoaded] = useState(false)
    let googleMapRef = useRef(null)

    useEffect(() => {
        const loadMap = async () => {
            await serverLocation(googleMapRef, server.location)
                .then(() => setIsMapLoaded(true))
        }
        loadMap()
    }, [])

    /*useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyByGzB_ekITVW1ZbSONQFQvgjjnqhIlgk0",
            version: "weekly",
        })
    
        loader.load().then(() => {
            googleMapRef.current = new google.maps.Map(googleMapRef.current as HTMLElement, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            })
        })
        .then(() => setIsMapLoaded(true))
    }, [])*/

    return (
      <SingleServerContainer>
        <SingleServerStyled
          layoutId={server.id}
        >
          <div>{server.name}</div>
          <div>{server.avgUptime}</div>
          <div>{server.status}</div>
          <div>{server.ip}</div>
          <div>{server.id}</div>
          <div>{server.lastSeen}</div>
          <div>{server.lastMessage}</div>
          <div>{server.location}</div>
          <div ref={googleMapRef} style={{ width: '1280px', height: '400px' }}/>
          <button onClick={onClick}>Close</button>
        </SingleServerStyled>
      </SingleServerContainer>
    )
  }
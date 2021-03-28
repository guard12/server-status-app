import { Loader } from "@googlemaps/js-api-loader"

export async function serverLocation(googleMapRef, location) {
	const loader = new Loader({
		apiKey: process.env.GOOGLE_MAPS_API_KEY,
		version: "weekly",
	});

	await loader.load().then(() => {
		googleMapRef.current = new google.maps.Map(googleMapRef.current as HTMLElement, {
			center: { lat: 0, lng: 0 },
			zoom: 8,
		})
	})
	.then(() => {
		const geocoder = new google.maps.Geocoder()
		geocoder.geocode({'address': location}, function(results, status) {
			if (status === 'OK') {
				googleMapRef.current.setCenter(results[0].geometry.location)
				googleMapRef.current = new google.maps.Marker({
					position: results[0].geometry.location,
					map: googleMapRef.current,
				  })
			} else {
			  throw new Error(`Failed to find the address: ${location}`)
			}
		  })
	})

}
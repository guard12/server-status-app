import React, { useEffect, useState } from 'react'

export function useDarkMode() {
	const [ isDarkMode, setIsDarkMode ] = useState(null)

	useEffect(() => {
		const hasPrefferedTheme = JSON.parse(localStorage.getItem('server-app-dark-mode'))
		if(hasPrefferedTheme) {
			setIsDarkMode(true)
		}
	}, [])

	const toggleThemeMode = async () => {
		await localStorage.setItem('server-app-dark-mode', JSON.stringify(!isDarkMode))
		window.location.reload()
	}

	return { isDarkMode, toggleThemeMode }
}
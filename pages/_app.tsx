import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AnimateSharedLayout } from "framer-motion"
import { StoreProvider } from 'easy-peasy'

import { store } from '../store/store' 
import { darkTheme, lightTheme } from '../themes/theme'
import { useDarkMode } from '../hooks/useDarkMode'

const GlobalStyle = createGlobalStyle`
  body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	min-height: 100vh;
	font-family: 'Roboto', sans-serif;
  }
  body > div:first-child,
    div#__next {
    	height: 100vh;
    }
`

export default function App({ Component, pageProps }) {
	const { isDarkMode } = useDarkMode()

	return (
		<AnimateSharedLayout>
			<GlobalStyle />
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<StoreProvider store={store}>
					<Component {...pageProps} />
				</StoreProvider>
			</ThemeProvider>
		</AnimateSharedLayout>
	)
}
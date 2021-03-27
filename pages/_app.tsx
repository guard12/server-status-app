import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AnimateSharedLayout } from "framer-motion"

import { darkTheme, lightTheme } from '../styles/theme'

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
	return (
		<AnimateSharedLayout>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</AnimateSharedLayout>
	)
}
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AnimateSharedLayout } from "framer-motion"

import { darkTheme, lightTheme } from '../src/styles/theme'

const GlobalStyle = createGlobalStyle`
  body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	min-height: 100vh;
  }
`

export default function App({ Component, pageProps }) {
	return (
		<AnimateSharedLayout>
			<GlobalStyle />
			<ThemeProvider theme={darkTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</AnimateSharedLayout>
	)
}
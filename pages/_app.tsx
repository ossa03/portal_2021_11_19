import { AppProps } from 'next/app'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import custumTheme from '../src/theme'
import Layout from '../src/components/layout'

import '../src/styles/global.css'

function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={custumTheme}>
			<CSSReset />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default App

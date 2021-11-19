import { Container } from '@chakra-ui/react'
import Header from './header'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Container maxWidth='container.xl' p={0}>
				<main>{children}</main>
			</Container>
		</>
	)
}

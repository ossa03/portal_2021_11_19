import { Container, Divider } from '@chakra-ui/react'
import Header from './header'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Container mt='80px' h='full' mx='auto' maxWidth='container.xl' p={0} overflow='hidden'>
				<main>{children}</main>
			</Container>
		</>
	)
}

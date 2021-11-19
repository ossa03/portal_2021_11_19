import { VFC } from 'react'

import { Flex, HStack, Divider, Container } from '@chakra-ui/react'

import Link from './link'

const Header: VFC = () => {
	return (
		<>
			<Container position='relative'>
				<Flex h='80px' w='full' justifyContent='space-around' alignItems='center' p={4}>
					<HStack>
						<Link href='/'>Home</Link>
						<Link href='/form'>Form</Link>
					</HStack>
				</Flex>
			</Container>
			<Divider />
		</>
	)
}

export default Header

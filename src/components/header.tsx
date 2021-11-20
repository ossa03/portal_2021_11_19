import { VFC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Center, Box, Flex, HStack, Divider, Container, AspectRatio, Text } from '@chakra-ui/react'

import Link from './link'

import Logo from '../../public/logo_shiroishi.jpg'

const Header: VFC = () => {
	const router = useRouter()

	return (
		<>
			<Flex h='80px' w='full' justifyContent='flex-start' alignItems='center' p={4}>
				<Flex cursor='pointer' justify='center' align='center'>
					<Image src={Logo} alt='logo' width='70px' height='70px' onClick={() => router.push('/')} />
				</Flex>
				<HStack flexGrow={1} justifyContent='center' w='full' spacing={6}>
					<Link href='/' cursor='pointer'>
						<Text as='a' fontSize='xl' textDecoration='none'>
							Home
						</Text>
					</Link>
					<Link href='/form' cursor='pointer'>
						<Text as='a' fontSize='xl' textDecoration='none'>
							Form
						</Text>
					</Link>
				</HStack>
			</Flex>
			<Divider />
		</>
	)
}

export default Header

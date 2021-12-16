import { VFC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Flex, HStack, Divider, Text, Tooltip, IconButton } from '@chakra-ui/react'

// icons
import { HiOutlineHome, HiOutlineClock, HiOutlineDocumentText, HiOutlinePlay } from 'react-icons/hi'

import ChakraLink from './link'

import Logo from '../../public/logo_shiroishi.jpg'

const navMenuList = [
	{ label: 'Home', href: '/', icon: HiOutlineHome, area_label: 'home' },
	{ label: '時間外登録', href: '/overtimeForm', icon: HiOutlineClock, area_label: 'overtime' },
	{ label: 'マニュアル', href: '/manualList', icon: HiOutlineDocumentText, area_label: 'manual' },
	{ label: '動画', href: '/playlist', icon: HiOutlinePlay, area_label: 'movie' },
]

const Header = () => {
	const router = useRouter()

	return (
		<>
			{/* 画面サイズmd以上のheader ... */}
			<Flex
				display={{ md: 'flex' }}
				as='header'
				position='fixed'
				zIndex={200}
				h='80px'
				w='full'
				justifyContent='space-between'
				alignItems='center'
				p={4}
				borderBottomWidth={1}
				borderColor={'gray.300'}
				backgroundColor='rgba(255,255, 255, 0.9)'
				backdropFilter='saturate(180%) blur(1px)'
			>
				{/* logo */}
				<Flex
					cursor='pointer'
					justify='center'
					align='center'
					onClick={() => router.push('/')}
					_hover={{ opacity: '0.8' }}
				>
					<Image src={Logo} alt='logo' width='70px' height='70px' />
					<Text as='h1' fontWeight='semibold' fontSize='2xl' ml={4}>
						放射線部
					</Text>
				</Flex>

				{/* navigation */}
				<HStack justifyContent='start' mr={10} spacing={1}>
					{/* navMenu */}
					{navMenuList.map((nav) => (
						<ChakraLink href={nav.href} cursor='pointer' key={nav.label}>
							<HStack spacing={1}>
								<IconButton
									aria-label={nav.area_label}
									icon={<nav.icon />}
									size={'md'}
									variant={'ghost'}
									justifyContent={'flex-end'}
									_hover={{ bg: 'inherit' }}
								/>
								<Text textDecoration='none'>{nav.label}</Text>
							</HStack>
						</ChakraLink>
					))}
				</HStack>
			</Flex>
			<Divider />
			{/* ... 画面サイズmd以上のheader */}

			{/* TODO mobile用のnavigationを作成する
							 headerはハンバーガーメニューとlogoにする
							 メニューを押したらDrawerで表示する */}
		</>
	)
}

export default Header

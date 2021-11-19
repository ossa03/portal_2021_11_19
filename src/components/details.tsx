import { NextPage } from 'next'
import {
	FormControl,
	FormLabel,
	Select,
	Input,
	Checkbox,
	Button,
	Heading,
	Text,
	VStack,
	SimpleGrid,
	GridItem,
	useBreakpointValue,
	LinkBox,
	LinkOverlay,
	Divider,
	Box,
	Flex,
} from '@chakra-ui/react'

const Details: NextPage = () => {
	const colSpan = useBreakpointValue({ base: 2, md: 1 })
	return (
		<VStack w='full' h='full' p={10} spacing={10} alignItems='flex-start'>
			<VStack alignItems='flex-start' spacing={3}>
				<Heading fontSize='2xl'>Your details</Heading>
				<Text> if you already have an account, click here to login</Text>
			</VStack>
			<SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>First Name</FormLabel>
						<Input placeholder='Hideyuki' name='firstname' />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>Last Name</FormLabel>
						<Input placeholder='Osanai' name='lastname' />
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl>
						<FormLabel>Address</FormLabel>
						<Input placeholder='address' name='address' />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>City</FormLabel>
						<Input placeholder='sapporo' name='city' />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>Country</FormLabel>
						<Select>
							<option value='japan' selected>
								Japan
							</option>
							<option value='usa'>USA</option>
						</Select>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl>
						<Checkbox defaultChecked>ship to billing address.</Checkbox>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl>
						<Button size='lg' w='full'>
							<span className=''>Place Order</span>
						</Button>
					</FormControl>
				</GridItem>
			</SimpleGrid>
		</VStack>
	)
}

export default Details

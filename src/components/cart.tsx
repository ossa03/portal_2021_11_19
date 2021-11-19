import { VFC } from "react"
import { Flex, Heading, Text, VStack, HStack, AspectRatio, Image, Divider } from "@chakra-ui/react"

const Cart: VFC = () => {
	return (
		<VStack w='full' h='full' p={10} spacing={6} alignItems='flex-start' bg='gray.50'>
			<VStack alignItems='flex-start' spacing={3} w='full'>
				<Heading fontSize='2xl'>Your cart</Heading>
				<VStack spacing={0} alignItems='flex-start'>
					<Text> if the price is hard on your eyes,</Text>
					<Text fontWeight='bold'> Try changing the theme.</Text>
				</VStack>
				<VStack spacing={4} w='full' pt={4} alignItems='flex-start'>
					<Flex w='full' justifyContent='space-between'>
						<HStack justifyContent='flex-start' spacing={3}>
							<AspectRatio w={20} ratio={1}>
								<Image src='avatar.png' alt='avatar' objectFit='cover' borderRadius='base' />
							</AspectRatio>
							<VStack alignItems='flex-start' spacing={0}>
								<Text fontSize='sm' fontWeight='bold'>
									Penny board
								</Text>
								<Text fontSize='xs' color='gray.600'>
									PNYCOMP27541
								</Text>
							</VStack>
						</HStack>
						<Flex alignItems='center'>
							<Text fontSize='sm' fontWeight='bold'>
								$119.00
							</Text>
						</Flex>
					</Flex>
					<VStack spacing={3} py={2} w='full'>
						<HStack w='full' justifyContent='space-between'>
							<Text color='gray.600' fontWeight='medium'>
								Subtotal
							</Text>
							<Text fontSize='sm' fontWeight='semibold'>
								$119.00
							</Text>
						</HStack>
						<HStack w='full' justifyContent='space-between'>
							<Text color='gray.600' fontWeight='medium'>
								Shipping
							</Text>
							<Text fontSize='sm' fontWeight='semibold'>
								$19.9
							</Text>
						</HStack>
						<HStack w='full' justifyContent='space-between'>
							<Text color='gray.600' fontWeight='medium'>
								Taxes(estimated)
							</Text>
							<Text fontSize='sm' fontWeight='semibold'>
								$23.80
							</Text>
						</HStack>
					</VStack>

					<Divider />

					<HStack w='full' justifyContent='space-between' alignItems='center' pt={3}>
						<Text color='gray.600' fontWeight='medium'>
							Total
						</Text>
						<Text fontSize='lg' fontWeight='semibold'>
							$162.78
						</Text>
					</HStack>
				</VStack>
			</VStack>
		</VStack>
	)
}

export default Cart

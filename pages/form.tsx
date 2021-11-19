import { VFC } from 'react'
import {
	Box,
	Heading,
	Flex,
	VStack,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Textarea,
	Button,
	Select,
} from '@chakra-ui/react'

const Form: VFC = () => {
	return (
		<form>
			<Flex d='colomnu' h='auto' w='500px' my={8} p={6} mx='auto' border='1px' rounded='md' borderColor='gray.200'>
				<Heading w='full' fontWeight='semibold' fontSize='2xl' textAlign='center' my={6}>
					時間外登録フォーム
				</Heading>

				<VStack spacing={4}>
					<FormControl id='name ' isRequired>
						<FormLabel>名前</FormLabel>
						<Select defaultValue='osanai'>
							<option value='osanai'>小山内</option>
							<option value='fujii'>藤井</option>
							<option value='takasawa'>高沢</option>
						</Select>
					</FormControl>

					<FormControl id='startTime' isRequired>
						<FormLabel>開始時間</FormLabel>
						<Input type='time' defaultValue='17:30' />
						<FormHelperText>時間外開始時間を入力してください．</FormHelperText>
					</FormControl>

					<FormControl id='endTime' isRequired>
						<FormLabel>終了時間</FormLabel>
						<Input type='time' />
						<FormHelperText>時間外終了時間を入力してください．</FormHelperText>
					</FormControl>

					<FormControl id='description' isRequired>
						<FormLabel>時間外勤務内容</FormLabel>
						<Textarea resize='none' defaultValue='血栓回収' />
						<FormHelperText></FormHelperText>
					</FormControl>
					<Button mt={4} rounded='sm' w='50%' type='submit'>
						送 信
					</Button>
				</VStack>
			</Flex>
		</form>
	)
}

export default Form

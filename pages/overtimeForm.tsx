import { useForm } from 'react-hook-form'
import axios from 'axios'
import { format } from 'date-fns'
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
	ButtonGroup,
	Select,
} from '@chakra-ui/react'

import { Radiologists, Modalities } from '../src/data'

export type FormValues = {
	radiologist: string
	date: string
	modality: string
	start: string
	end: string
	description: string
}

const OvertimeForm = () => {
	const today = new Date()
	const str_today = format(today, 'yyyy-MM-dd')
	const str_now = format(today, 'HH:mm')

	// フォームの初期値
	const defaultFormValues = {
		radiologist: '小山内',
		date: str_today,
		modality: 'AG',
		start: '17:30',
		end: str_now,
		description: '血栓回収',
	}
	// console.log('osalog', defaultFormValues)

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormValues>({ defaultValues: defaultFormValues })

	const onSubmit = (postData: FormValues) => {
		// 確認を表示 → OKなら処理続行．NOならキャンセル.
		if (window.confirm('この内容で送信してよろしいですか？')) {
			console.log(postData)

			// POST to '/api/add
			axios.post('/api/add_overtime', { data: postData })
			console.log('送信したよ')
		} else {
			console.log('送信できませんでした')
		}
	}

	const onReset = () => {
		reset(defaultFormValues)
		console.log('resetしたよ')
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex d='colomnu' h='full' w='500px' my={8} p={6} mx='auto' border='1px' rounded='md' borderColor='gray.200'>
					<Heading w='full' fontWeight='semibold' fontSize='2xl' textAlign='center' my={4}>
						時間外登録フォーム
					</Heading>

					<VStack spacing={4}>
						<FormControl>
							<FormLabel htmlFor='radiologist'>名前</FormLabel>
							<Select id='radiologist' {...register('radiologist', { required: true })}>
								{Radiologists.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</Select>
							<FormErrorMessage>{errors.radiologist && errors.radiologist.message}</FormErrorMessage>
						</FormControl>

						<FormControl>
							<FormLabel htmlFor='date'>実施日</FormLabel>
							<Input type='date' {...register('date', { required: true })} />
							<FormErrorMessage>{errors.date && errors.date.message}</FormErrorMessage>
						</FormControl>

						<FormControl>
							<FormLabel htmlFor='modality'>モダリティ</FormLabel>
							<Select id='modality' {...register('modality', { required: true })}>
								{Modalities.map((modality) => (
									<option key={modality.value} value={modality.value}>
										{modality.label}
									</option>
								))}
							</Select>
							<FormErrorMessage>{errors.radiologist && errors.radiologist.message}</FormErrorMessage>
						</FormControl>

						<FormControl>
							<FormLabel htmlFor='start'>開始時間</FormLabel>
							<Input type='time' {...register('start', { required: true })} />
							<FormErrorMessage>{errors.start && errors.start.message}</FormErrorMessage>
						</FormControl>

						<FormControl>
							<FormLabel htmlFor='end'>終了時間</FormLabel>
							<Input type='time' {...register('end', { required: true })} />
							<FormErrorMessage>{errors.end && errors.end.message}</FormErrorMessage>
						</FormControl>

						<FormControl>
							<FormLabel htmlFor='description'>時間外勤務内容</FormLabel>
							<Textarea resize='none' {...register('description', { required: true })} />
							<FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
						</FormControl>
						<ButtonGroup variant='outline' spacing='6'>
							<Button isLoading={isSubmitting} colorScheme='blue' type='submit'>
								送 信
							</Button>
							<Button onClick={onReset} colorScheme='red'>
								リセット
							</Button>
						</ButtonGroup>
					</VStack>
				</Flex>
			</form>
		</>
	)
}

export default OvertimeForm

import { useState } from 'react'
import { useRouter } from 'next/router'
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
	Center,
	Text,
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
	const [isSubmit, setIsSubmit] = useState<boolean>(false)

	const router = useRouter()

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

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
		reset,
	} = useForm<FormValues>({ defaultValues: defaultFormValues })

	const onSubmit = (postData: FormValues) => {
		// 確認を表示 → OKなら処理続行．NOならキャンセル.
		if (window.confirm('この内容で送信してよろしいですか？')) {
			setIsSubmit(true)
			console.log(postData)

			// POST to '/api/add
			axios.post('/api/add_overtime', { data: postData }).then((res) => {
				console.log(res.status)
				console.log(res.statusText)
				if (res.statusText == 'ok') {
					setIsSubmit(true)
					router.push('/overtimeForm')
					reset(defaultFormValues)
				} else {
					setIsSubmit(false)
				}
			})
		} else {
			console.log('送信をキャンセルしました')
			console.log(isSubmit)
		}
	}

	const onReset = () => {
		reset(defaultFormValues)
		console.log('resetしたよ')
	}

	// 送信完了後に表示するコンポーネント
	const submittedComponent: JSX.Element = (
		<div className={'flex flex-col justify-center items-center space-y-6 p-10 min-h-screen'}>
			<p className={'text-3xl text-gray-900 font-semibold'}>送信しました．</p>
			<button
				className={
					'text-base px-4 py-2 rounded-md border-2 outline-none hover:indigo-blue-700 text-gray-700 hover:text-indigo-700'
				}
				onClick={() => {
					setIsSubmit(false)
					router.push('/overtimeForm')
					reset(defaultFormValues)
				}}
			>
				戻る
			</button>
		</div>
	)

	return (
		<>
			{isSubmit ? (
				submittedComponent
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<Flex d='colomnu' h='full' w='500px' my={8} p={6} mx='auto' border='1px' rounded='md' borderColor='gray.200'>
						<Heading w='full' fontWeight='semibold' fontSize='2xl' textAlign='center' my={4}>
							時間外登録フォーム
						</Heading>

						<VStack spacing={4}>
							<FormControl isInvalid={!!errors.radiologist}>
								<FormLabel>名前</FormLabel>
								<Select {...register('radiologist', { required: '名前を選択してください' })}>
									{Radiologists.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</Select>
								<FormErrorMessage>{errors.radiologist && errors.radiologist.message}</FormErrorMessage>
							</FormControl>

							<FormControl isInvalid={!!errors.date}>
								<FormLabel>実施日</FormLabel>
								<Input type='date' {...register('date', { required: '実施日を入力してください' })} />
								<FormErrorMessage>{errors.date && errors.date.message}</FormErrorMessage>
							</FormControl>

							<FormControl isInvalid={!!errors.modality}>
								<FormLabel>モダリティ</FormLabel>
								<Select {...register('modality', { required: 'モダリティを選択してください' })}>
									{Modalities.map((modality) => (
										<option key={modality.value} value={modality.value}>
											{modality.label}
										</option>
									))}
								</Select>
								<FormErrorMessage>{errors.modality && errors.modality.message}</FormErrorMessage>
							</FormControl>

							<FormControl isInvalid={!!errors.start}>
								<FormLabel>開始時間</FormLabel>
								<Input type='time' {...register('start', { required: '開始時間を入力してください' })} />
								<FormErrorMessage>{errors.start && errors.start.message}</FormErrorMessage>
							</FormControl>

							<FormControl isInvalid={!!errors.end}>
								<FormLabel>終了時間</FormLabel>
								<Input type='time' {...register('end', { required: '終了時間を入力してください' })} />
								<FormErrorMessage>{errors.end && errors.end.message}</FormErrorMessage>
							</FormControl>

							<FormControl isInvalid={!!errors.description}>
								<FormLabel>内容</FormLabel>
								<Textarea resize='none' {...register('description', { required: '業務内容を入力してください' })} />
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
			)}
		</>
	)
}

export default OvertimeForm

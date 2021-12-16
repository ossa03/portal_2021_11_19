import { FC } from 'react'
import {
	Modal as ChakraModal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
} from '@chakra-ui/react'
import { FormValues } from '../../pages/overtimeForm'

type Props = {
	title: string
	body: string
	isOpen: boolean
	onClose: () => void
	handleSubmit: () => void
}

const Modal: FC<Props> = ({ title, body, isOpen, onClose, handleSubmit }, ...restProps) => {
	return (
		<>
			{/* <Button onClick={onOpen}>Open Modal</Button> */}

			<ChakraModal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>{body}</ModalBody>

					<ModalFooter>
						<Button colorScheme='red' variant={'solid'} mr={3} onClick={onClose}>
							Close
						</Button>
						<Button colorScheme={'blue'} variant='ghost' onClick={handleSubmit}>
							送信
						</Button>
					</ModalFooter>
				</ModalContent>
			</ChakraModal>
		</>
	)
}
export default Modal

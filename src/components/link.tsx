import React from 'react'
import NextLink from 'next/link'
import { Link, LinkProps, LinkOverlay, LinkBox } from '@chakra-ui/react'

const ModifiedLink: React.FC<LinkProps> = ({ href, children, ...restProps }) => {
	return (
		<LinkBox
			_hover={{
				// color: 'gray.500',
				opacity: '0.6',
				transform: 'scale(1.1)',
			}}
		>
			<NextLink href={href}>
				<LinkOverlay
					{...restProps}
					transition={'ease'}
					transitionProperty={'all'}
					transitionDuration={'normal'}
					onClick={() => (document.activeElement as HTMLElement).blur()}
				>
					{children}
				</LinkOverlay>
			</NextLink>
		</LinkBox>
	)
}

export default ModifiedLink

import React from 'react'
import NextLink from 'next/link'
import { Link, LinkProps } from '@chakra-ui/react'

const ModifiedLink: React.FC<LinkProps> = ({ href, children, ...restProps }) => {
	return (
		<NextLink href={href}>
			<Link {...restProps} onClick={() => (document.activeElement as HTMLElement).blur()}>
				{children}
			</Link>
		</NextLink>
	)
}

export default ModifiedLink

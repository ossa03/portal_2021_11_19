import React from "react"
import NextLink from "next/link"
import { LinkProps, LinkOverlay, LinkBox } from "@chakra-ui/react"

const ChakraLink: React.FC<LinkProps> = ({ href, children, ...restProps }) => {
	return (
		<LinkBox
			cursor="pointer"
			_hover={{
				opacity: "0.6",
				transform: "scale(1.1)",
			}}
		>
			<NextLink href={href}>
				<LinkOverlay
					{...restProps}
					transition={"ease"}
					transitionProperty={"all"}
					transitionDuration={"normal"}
					onClick={() => (document.activeElement as HTMLElement).blur()}
				>
					{children}
				</LinkOverlay>
			</NextLink>
		</LinkBox>
	)
}

export default ChakraLink

import React from "react"
import { LinkProps, LinkOverlay, LinkBox } from "@chakra-ui/react"

const ExternalLink: React.FC<LinkProps> = ({ href, children, ...restProps }) => {
	return (
		<LinkBox cursor="pointer">
			<LinkOverlay
				href={href}
				{...restProps}
				transition={"ease"}
				transitionProperty={"all"}
				transitionDuration={"normal"}
				onClick={() => (document.activeElement as HTMLElement).blur()}
			>
				{children}
			</LinkOverlay>
		</LinkBox>
	)
}

export default ExternalLink

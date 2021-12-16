import { FC } from "react"
import NextImage from "next/image"
import { format } from "date-fns"

import ExternalLink from "./externalLink"

import { Snippet } from "../types"
import { Heading, Text, VStack } from "@chakra-ui/react"

type Props = {
	snippet: Snippet
}

const PlaylistItem: FC<Props> = (props) => {
	const { title, thumbnails, resourceId, description, publishedAt } = props.snippet
	const { videoId } = resourceId
	const { url, height, width } = thumbnails.medium
	const YOUTUBE_PLAY_URL = `https://www.youtube.com/watch/?v=${videoId}`

	return (
		<>
			<ExternalLink href={YOUTUBE_PLAY_URL} isExternal>
				<VStack
					className="w-64 p-2 text-white bg-gray-800 border border-gray-600 rounded h-60"
					alignItems={"stretch"}
					justifyContent={"space-between"}
					_hover={{ opacity: "0.9" }}
				>
					<Heading w={"full"} size={"md"} mb={4}>
						{title}
					</Heading>
					<NextImage
						className="w-full h-full rounded"
						src={url}
						height={height}
						width={width}
						layout="responsive"
						objectFit="contain"
					/>

					<Text as="span" className="flex justify-end w-full text-sm">
						{format(new Date(publishedAt), "yyyy/MM/dd")}
					</Text>
				</VStack>
			</ExternalLink>
		</>
	)
}

export default PlaylistItem

// TODO  youtube_apiを使用してマニュアルの再生リストを表示する
import NextImage from "next/image"
import { GetServerSideProps, GetStaticProps } from "next"
import { Flex, Wrap } from "@chakra-ui/react"

import { Snippet } from "../src/types"
import PlaylistItem from "../src/components/playlistItem"

export const getStaticProps: GetStaticProps = async (context) => {
	const MAX_RESULTS = 5
	const YOUTUBE_PLAYLIST_ITEMS_API = `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&maxResults=${MAX_RESULTS}`
	const YOUTUBE_PLAYLIST_ID = "PLdUwL9O_dBokaW-aavCp3ppd6ynTs-gd2"

	const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}&part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}`)
	const data = await res.json()

	console.log(data.items)
	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: { data },
	}
}

const Playlist = ({ data }) => {
	console.log(data)
	return (
		<>
			<div>マニュアルプレイリスト(youtube)</div>
			<Wrap justifyContent={"space-around"} spacing={8}>
				{data.items.map((item) => {
					const snippet: Snippet = item.snippet
					const { videoId } = snippet.resourceId

					return <PlaylistItem key={videoId} snippet={snippet} />
				})}
			</Wrap>
		</>
	)
}

export default Playlist

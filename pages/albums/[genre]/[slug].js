import { Box, Flex } from 'reflexbox'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'

function Album({ album }) {

    console.log(album)
    const { API_URL } = process.env

    return (

        <Box variant="container">

            <Box as="h2" my={40}>{album.title}</Box>

            <Box maxWidth={600}>

                <p dangerouslySetInnerHTML={{ __html: album.description }}></p>

            </Box>
        </Box>
    )
}

const { publicRuntimeConfig } = getConfig()


export async function getServerSideProps(context) {

    const { slug } = context.query

    const res = await fetch(`${publicRuntimeConfig.API_URL}/albums?Slug=${slug}`)

    const data = await res.json()

    return {
        props: {
            album: data[0]
        },
    }
}


export default Album
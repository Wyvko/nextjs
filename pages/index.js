import fetch from 'isomorphic-unfetch'
import Card from '../components/Card'
import { Flex, Box } from 'reflexbox'

const Home = ({ albums }) => {
    console.log(albums)

    return (
        <Box variant="container">
           <Box my={40} as="h2">Check the albums that I remember particularly well!</Box>
           <Flex justifyContent="space-between" flexDirection={{ _: "column", md: "row"}} mb={100} flexWrap="wrap">
                {albums.map(album => (
                    <Box key={album.id} width={{ _: "100%", md: "30%" }}>

                        <Card album={album} />

                    </Box>


                ))}
           </Flex>
        </Box>
    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/albums`)
    const data = await res.json()

    return {
        props: {
            albums: data
        }
    }
}

export default Home

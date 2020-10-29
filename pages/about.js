import {NextSeo} from 'next-seo'

function About() {
    const SEO = {
        title: 'About page',
        description: 'In progress',

        openGraph: {
            title: 'About page',
            description: 'In progress',
        }
    }

    return (
        <>
            <NextSeo {...SEO } />
            <h1>Few words about me :)</h1>
        </>
    )
}

export default About

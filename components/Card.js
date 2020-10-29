import styled from '@emotion/styled'
import Link from 'next/link'

function Card ({ album }) {
    const { API_URL } = process.env
    console.log(album)
    return (
        <CardStyled>
            <div className="poster">
                <img src={API_URL + album.poster[0].url} alt=""/>
            </div>
            <div className="body">
                <h3>{ album.title }</h3>
                <p dangerouslySetInnerHTML={{ __html: album.description }} />

                <Link href="/albums/[genre]/[slug]" as={`/albums/${album.genre.Slug}/${album.Slug}`}>
                    <a>More about this album</a>
                </Link>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    min-height: 700px;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    
    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
        }
        
        a {
            display: inline-block;
            margin: 20px 0;
        }
       
    }
`

export default Card

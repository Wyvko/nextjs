import styled from '@emotion/styled'
import { rem } from 'polished'
import { Flex, Box } from 'reflexbox'
import Navigation from 'components/Navigation'
import Link from 'next/link'

const Header = ({ isDark, navigation }) => {
    return (
        <HeaderStyled isDark={isDark}>
            <Box variant="container">
                <Flex justifyContent="space-between" alignItems="center">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img src="https://i.imgur.com/MdGMYf1.png" alt="Sites logo" />
                                <span className="logo-text">Best Albums - presented via Maciej Mateusiak</span>
                            </a>
                        </Link>
                    </div>

                    <Navigation navigation={navigation} />
                </Flex>
            </Box>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    background: ${props => props.isDark ? '#000000' : '#BDCCFF' };
    padding: 20px;

    .logo {
        a {
            display: flex;
            align-items: center;
            text-decoration: none;
        }

        .logo-text {
            color: #333333;
            font-weight: bold;
            font-size: ${rem(20)};
            margin-left: 20px;
        }
    }
`

export default Header

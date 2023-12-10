import React from 'react';
import { useGlobalContext } from '../context/global'
import Popular from './Popular'
import styled from 'styled-components'
import Upcoming from './Upcoming'
import Navbar from "./MenuBar";
import Airing from './Airing'
import { Button, Input } from 'antd';
import { FireOutlined, PlayCircleOutlined, PlusOutlined } from '@ant-design/icons';

function Homepage() {
    const { handleSubmit,
        search,
        searchAnime,
        handleChange,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext()

    const [rendered, setRendered] = React.useState('popular')
    //seccion show anime , en la que cambia al selecionar otro filtro 
    const switchComponent = () => {
        switch (rendered) {
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }

    return (
        <HomepageStyled>
             <Navbar setRendered={setRendered} />
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular' ? 'Anime Populares' :
                            rendered === 'airing' ? 'Anime En Emisión' : 'Animes en lanzamiento'}
                    </h1>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <Button
                            icon={<FireOutlined />}
                            onClick={() => {
                                setRendered('popular');
                                getPopularAnime();
                            }}
                        >
                            Popular
                        </Button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="Input-control">
                            <Input type="text" placeholder="BuscarAnime" value={search} onChange={handleChange} />
                            <Button type="submit">Search</Button>
                        </div>
                    </form>
                    <div className="filter-btn airing-filter">
                        <Button
                            icon={<PlayCircleOutlined />}
                            onClick={() => {
                                setRendered('airing');
                                getAiringAnime();
                            }}
                        >
                            Emisión
                        </Button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <Button
                            icon={<PlusOutlined />}
                            onClick={() => {
                                setRendered('upcoming')
                                getUpcomingAnime()
                            }}>Próximos</Button>
                    </div>
                </div>
            </header>
            {switchComponent()}
        </HomepageStyled >
    )
}

const HomepageStyled = styled.div`
    background-color: #EDEDED;
    header{
        padding: 2rem 5rem;
        width: 60%;
        margin: 0 auto;
        transition: all .4s ease-in-out;
        @media screen and (max-width:1530px){
            width: 95%;
        }
        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
        }
        .search-container{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            form{
                position: relative;
                width: 100%;
                .Input-control{
                    position: relative;
                    transition: all .4s ease-in-out;
                }

                .Input-control Button{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
`

export default Homepage
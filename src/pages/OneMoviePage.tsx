import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {styled as muiStyled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import styled from "styled-components";
import data from "../mock/movies.json"
import {IMovieInfo} from "../components/MovieListItem";


const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  row-gap: 15px;


`
const MovieTitle = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`
const MovieCreationYear = styled.div`
  color: #cbcbcb;
  &:hover{
    color: white;
    cursor: pointer;
  }
`


const MovieTags = styled.div`
  display: flex;
  column-gap: 5px;
  color: #cbcbcb;
  &> div:hover{
    color: white;
    cursor: pointer;
  }
`

const MovieProducer = styled.div`

`

const MovieActors = styled.div`

`


const Poster = styled.img`
  max-width: 100%;
  border-radius: 10px;
`


const OneMoviePage: FC = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState<IMovieInfo| undefined>({
        "name": "Аватар: Путь воды",
        "genre": ["фантастика", "фэнтези", "боевик", "приключения"],
        "producer": "Джеймс Кэмерон",
        "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/2e51cb8b-fd51-4166-84a2-63559733baac/1920x",
        "creationYear": 2022,
        "rating": 7.8,
        "cast": [
            "Сэм Уортингтон",
            "Зои Салдана",
            "Сигурни Уивер",
            "Стивен Лэнг",
            "Кейт Уинслет"
        ],
        "id": 6464616946156464
    })
    useEffect(() => {
        if (id) {
            setMovie(data.find((movie) => movie.id === +id));
        }
    }, [id]);
    return (
        <Box sx={{flexGrow: 1}}>
            {movie && (
                <Grid className={'mainGrid'} container spacing={2}>
                    <Grid xs={12} md={6}>
                        <Poster src={movie.posterUrl}/>
                    </Grid>
                    <Grid md={6}>
                        <MovieInfo>
                            <MovieTitle>
                                {movie.name}
                            </MovieTitle>
                            <MovieCreationYear>
                                {movie.creationYear.toString()}
                            </MovieCreationYear>
                            <MovieTags>
                                {movie.genre.map((tag) => (
                                    <div>{tag}</div>
                                ))}
                            </MovieTags>
                        </MovieInfo>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default OneMoviePage;
import React, {FC} from 'react';
import styled from "styled-components";
import data from "../mock/movies.json"
import MovieListItem from "./MovieListItem";
const MovieListEl = styled.div`
  display:flex;
  flex-wrap : wrap;
  gap : 10px;
  justify-content: space-between;
  @media ${props => props.theme.media.phone}{
    justify-content: center;
  }
  
`

const MovieList:FC = () => {
    return (
        <>
            <MovieListEl>
                {data.map((item)=> (
                    <MovieListItem name={item.name}
                                   genre={item.genre}
                                   producer={item.producer}
                                   posterUrl={item.posterUrl}
                                   creationYear={item.creationYear}
                                   rating={item.rating}
                                   cast={item.cast}/>
                ))}
            </MovieListEl>
        </>
    );
};

export default MovieList;
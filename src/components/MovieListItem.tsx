import React, {FC} from 'react';
import styled from "styled-components";

const Movie = styled.div`
  height: 300px;
  background-color: black;
  display: flex;
  flex-direction: column;
  border-radius : 10px;
`

const Poster = styled.img`
  max-height: 80%;
  border-radius: 10px;
`

const Title = styled.div`
    align-self: center;
`
const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-around;
  justify-self: end;
  flex-grow: 1;
  align-items: flex-end;
`

const Date = styled.div`
`

const Rating = styled.div`
`



interface IMovieInfo {
    "name" : String,
    "genre" : String[],
    "producer" : String,
    "posterUrl" : string,
    "creationYear" : Number | Date,
    "rating" : Number,
    "cast" : String[]
}


const MovieListItem:FC<IMovieInfo> = (props) => {
    return (
        <>
            <Movie>
                <Poster src={props.posterUrl}/>
                <Title>{props.name}</Title>
                <AdditionalInfo>
                    <div>2022</div>
                    <div>7.9</div>
                </AdditionalInfo>
            </Movie>
        </>
    );
};

export default MovieListItem;
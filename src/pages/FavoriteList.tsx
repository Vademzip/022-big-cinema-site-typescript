import React from 'react';
import styled from "styled-components";
import data from "../mock/movies.json"

const FavoriteListContainer = styled.div`
    text-align: center;
`
const PageTitle = styled.div`
  font-size: 36px;
`
const MovieTypePanel = styled.div`
  display: flex;
  column-gap: 10px;
`
const MovieTypeButton = styled.button`
  font-size: 16px;
  background: none;
  border-radius: 10px;
  padding: 7px;
  border: 1px solid white;
  
  &:hover{
    cursor: pointer;
    background-color: #640089;
  }
  
`
const FavoriteListItemBlock = styled.div`
  margin-top: 20px;
  height: 150px;
  width: 100%;
  border-radius: 25px;
  border: 1px solid white;
  display: flex;
  flex-wrap: nowrap; /* чтобы элементы не переносились на новую строку */
  justify-content: space-between; /* чтобы элементы были выровнены по краям */
`
const PosterContainer = styled.div`
  flex: 20% 0 0; /* первый элемент будет занимать 20% доступного места */
`

const MoviePoster = styled.img`
  max-width: 100%;
  width: 100px;
  border-radius: 10px;
`
const MovieMainInfo = styled.div`
  flex: 30% 0 0;
`

const MovieTitle = styled.div`
  
`
const MovieProducer = styled.div`
  
`

const MovieSecondInfo = styled.div`
  flex: 30% 0 0;
`

const MovieCreationYear = styled.div`
  
`

const MovieRating = styled.div`
  
`
const DeleteFavoriteButton = styled.button`
  flex: 20% 0 0;
  background:none;
  border: none;
  font-size: 26px;
`


const FavoriteList = () => {
    return (
        <FavoriteListContainer>
            <PageTitle>
               Моё избранное
            </PageTitle>
            <MovieTypePanel>
                <MovieTypeButton>
                    Всё подряд
                </MovieTypeButton>
                <MovieTypeButton>
                    Фильмы
                </MovieTypeButton>
                <MovieTypeButton>
                    Сериалы
                </MovieTypeButton>
            </MovieTypePanel>
            <FavoriteListItemBlock>
                <MoviePoster src={data[0].posterUrl}/>
                <MovieMainInfo>
                    <MovieTitle>{data[0].name}</MovieTitle>
                    <MovieProducer>Джеймс Кэмерон</MovieProducer>
                </MovieMainInfo>
                <MovieSecondInfo>
                    <MovieCreationYear>2022</MovieCreationYear>
                    <MovieRating>7.9</MovieRating>
                </MovieSecondInfo>
                <DeleteFavoriteButton>
                    Удалить из избранного
                </DeleteFavoriteButton>
            </FavoriteListItemBlock>
        </FavoriteListContainer>
    );
};

export default FavoriteList;
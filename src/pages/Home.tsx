import React, {FC, PropsWithChildren} from 'react';
import styled from "styled-components";
import SliderValueLabel from "@mui/material/Slider/SliderValueLabel";
import propTypes = SliderValueLabel.propTypes;
import MovieList from "../components/MovieList";

interface HomePageProps {
    color?: string
}

const MainPage = styled.main`
  background-color: ${props => props.color || props.theme.colors.primary};
  color: white;
  margin-top: 1rem;
`
const TrendTitle = styled.div`
  font-size: 48px;
`

const Home: FC<PropsWithChildren<HomePageProps>> = (props, {children}) => {
    return (
        <MainPage {...props}>
            <TrendTitle>
                ПОПУЛЯРНО СЕЙЧАС
            </TrendTitle>
            <MovieList/>

        </MainPage>
    );
};

export default Home;
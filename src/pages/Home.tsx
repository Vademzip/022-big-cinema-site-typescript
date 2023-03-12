import React, {FC, PropsWithChildren} from 'react';
import styled from "styled-components";
import SliderValueLabel from "@mui/material/Slider/SliderValueLabel";
import propTypes = SliderValueLabel.propTypes;

interface HomePageProps{
    color?: string
}

const MainPage = styled.main`
  background-color: ${props => props.color || props.theme.colors.primary};
  color: white;
`

const Home:FC<PropsWithChildren<HomePageProps>> = (props,{children}) => {
    return (
       <MainPage {...props}>
            Капибарка
       </MainPage>
    );
};

export default Home;
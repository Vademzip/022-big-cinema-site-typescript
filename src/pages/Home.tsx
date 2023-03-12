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
           Зайка моя! Я твой зайчик.
           Ручка моя! Я твой пальчик.
           Рыбка моя! Я твой глазик.
           Банька моя! Я твой тазик.
           Зайка моя! Я твой зайчик.
           Ручка моя! Я твой пальчик.
           Рыбка моя! Я твой глазик.
           Банька моя! Я твой тазик.
           Зайка моя! Я твой зайчик.
           Ручка моя! Я твой пальчик.
           Рыбка моя! Я твой глазик.
           Банька моя! Я твой тазик.
           Зайка моя! Я твой зайчик.
           Ручка моя! Я твой пальчик.
           Рыбка моя! Я твой глазик.
           Банька моя! Я твой тазик.
           Зайка моя! Я твой зайчик.
           Ручка моя! Я твой пальчик.
           Рыбка моя! Я твой глазик.
           Банька моя! Я твой тазик.
           Зайка моя! Я твой зайчик.
           Ручка моя! Я твой пальчик.
           Рыбка моя! Я твой глазик.
           Банька моя! Я твой тазик.
           Зайка моя! Я твой зайчик.
           Ручка моя! Я твой пальчик.
           Рыбка моя! Я твой глазик.
           Банька моя! Я твой тазик.
       </MainPage>
    );
};

export default Home;
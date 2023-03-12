import React from 'react'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "@mui/material";
import Home from "./pages/Home";
import NavState from "./context/navState";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {

    return (
        <NavState>
                <Header/>
            <AppWrapper>
                <Container className={'wrapper'}>
                    <Home/>
                </Container>
                <Footer/>
            </AppWrapper>
        </NavState>
    )
}

export default App

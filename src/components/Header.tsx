import * as React from 'react';
import {styled as muiStyled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Container} from "@mui/material";
import {useContext, useEffect, useRef} from "react";
import {MenuContext} from "../context/navState";
import HamburgerButton from "./HamburgerButton";
import {SideMenu} from "./SideBar";
import styled from "styled-components";
import useOnClickOutside from "../hooks/onClickOutside";




const Search = muiStyled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const SearchIconWrapper = muiStyled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = muiStyled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Logo = styled.img`
  max-height: 45px;
  max-width:64px;
  @media ${props => props.theme.media.phone}{
    display:none;
  }
`


const LogoTitle = styled.div`
  display: block;
  flex-grow: 1;
  font-size: 24px;
  @media ${props => props.theme.media.phone}{
    display:none;
  }
`


const Header = () => {

    const node = useRef<HTMLDivElement>(null);
    const {isMenuOpen, toggleMenuMode} = useContext(MenuContext);
    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <>
            <Box sx={{flexGrow: 0}}>
                <AppBar className={'navbar'}>
                    <Container>
                        <Toolbar className={'header'}>
                            <HamburgerButton/>
                            <LogoTitle>
                                BEBRA MOVIES
                            </LogoTitle>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon/>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </Search>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <nav ref={node} className={'sideMenu'}>
                <SideMenu/>
            </nav>
        </>
    );
};

export default Header;
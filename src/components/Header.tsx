import React, {useContext, useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Container} from "@mui/material";
import {MenuContext} from "../context/navState";
import HamburgerButton from "./HamburgerButton";
import {SideMenu} from "./SideBar";
import {useOnClickOutside, useOnClickOutsideForAuthorizedMenu, useOnClickOutsideForMenu} from "../hooks/onClickOutside";
import bebraLogo from "../bebra.png"
import {Link, NavLink} from "react-router-dom";
import SearchBar from "./SearchBar";
import {Logo} from "./Logo";
import UserIcon from "./UserIcon";
import LoginPage from "../pages/LoginPage";
import FavoriteListIcon from "./FavoriteListIcon";
import AuthorizedUserMenu from "./AuthorizedUserMenu";
import RegisterPage from "../pages/RegisterPage";


const Header = () => {
    const userMenuRef = useRef<HTMLInputElement>(null);
    const node = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLDivElement>(null);
    const userMenuButtonRef = useRef<HTMLDivElement>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);
    const loginButtonRef = useRef<HTMLDivElement>(null);
    const registerModalContentRef = useRef<HTMLDivElement>(null);
    const registerButtonRef = useRef<HTMLDivElement>(null);
    const authorizedUserMenuRef = useRef<HTMLDivElement>(null);
    const {
        isMenuOpen,
        toggleMenuMode,
        isUserMenuOpen,
        toggleUnauthorizedUserMenuMode,
        showModal,
        handleLoginClick,
        setShowModal,
        handleLoginClose,
        handleRegisterClose,
        handleRegisterClick,
        showRegisterModal,
        setShowRegisterModal,
        isUserAuth,
        setUserAuth,
        isUnauthorizedUserMenuOpen,
        setUnauthorizedUserMenuOpen
    } = useContext(MenuContext);

    useOnClickOutside(node, menuButtonRef, () => {
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    useOnClickOutsideForMenu(userMenuRef, userMenuButtonRef, () => {
        if (isUserMenuOpen) {
            toggleUnauthorizedUserMenuMode();
        }
    })

    useOnClickOutsideForAuthorizedMenu(authorizedUserMenuRef, userMenuButtonRef, () => {
        if (isUserMenuOpen) {
            toggleUnauthorizedUserMenuMode();
        }
    })


    return (
        <>
            <Box sx={{flexGrow: 0}}>
                <AppBar className={'navbar'}>
                    <Container style={{position: "relative"}}>
                        <Toolbar className={'header'}>
                            <div ref={menuButtonRef}>
                                <HamburgerButton/>
                            </div>
                            <NavLink to={'/'}>
                                <Logo src={bebraLogo}/>
                            </NavLink>
                            <div className={'navMenu'}>
                                <NavLink to={'/'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Главная</NavLink>
                                <NavLink to={'/news'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Новинки</NavLink>
                                <NavLink to={'/movies'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Фильмы</NavLink>
                                <NavLink to={'/series'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Сериалы</NavLink>
                            </div>
                            {isUserAuth && <Link to={'/favorites'}><FavoriteListIcon/></Link>}
                            <SearchBar
                                inputRef={userMenuRef}
                                loginButtonRef={loginButtonRef}
                                registerButtonRef={registerButtonRef}
                                handleRegisterClick={handleRegisterClick}
                                handleLoginClick={handleLoginClick}
                                isUserAuth={isUserAuth}
                            />
                            <div ref={userMenuButtonRef}>
                                <UserIcon/>
                            </div>
                        </Toolbar>
                        {isUserAuth ?
                            <div ref = {authorizedUserMenuRef}>
                                <AuthorizedUserMenu open={isUnauthorizedUserMenuOpen}
                                                    setUserAuth={setUserAuth}
                                                    setAuthorizedUserMenuOpen={setUnauthorizedUserMenuOpen
                                }/>
                            </div>
                            : <>
                                <LoginPage
                                    handleLoginClose={handleLoginClose}
                                    modalContentRef={modalContentRef}
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                    loginButtonRef={loginButtonRef}
                                    setUserAuth={setUserAuth}
                                />
                                <RegisterPage handleRegisterClose={handleRegisterClose}
                                              registerButtonRef={registerButtonRef}
                                              registerModalContentRef={registerModalContentRef}
                                              setShowModal={setShowRegisterModal}
                                              showModal={showRegisterModal}
                                />
                            </>
                        }
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
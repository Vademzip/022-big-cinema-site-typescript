import React, {createContext, FC, PropsWithChildren, useState} from 'react';

interface IValue {
    isMenuOpen: boolean;
    toggleMenuMode: () => void; //Боковая менюшка
    isUserMenuOpen: boolean;
    toggleUnauthorizedUserMenuMode: () => void;
    handleLoginClick: () => void;
    handleLoginClose: () => void;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleRegisterClick: () => void;
    handleRegisterClose: () => void;
    showRegisterModal: boolean;
    setShowRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
    isUnauthorizedUserMenuOpen: boolean;
    setUnauthorizedUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isUserAuth: boolean;
    setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
    isAuthorizedUserMenuOpen : boolean;
    // toggleAuthorizedUserMenuMode: () => void;
}

export const MenuContext = createContext<IValue>({
    isAuthorizedUserMenuOpen: false,
    isUnauthorizedUserMenuOpen: false,
    setUnauthorizedUserMenuOpen(value: ((prevState: boolean) => boolean) | boolean): void {
    },
    /*toggleAuthorizedUserMenuMode(): void {
    },*/
    isUserAuth: false,
    setUserAuth(value: ((prevState: boolean) => boolean) | boolean): void {
    },
    isMenuOpen: true,
    toggleMenuMode: () => {
    },
    isUserMenuOpen: false,
    toggleUnauthorizedUserMenuMode: () => {
    },
    showModal: false,
    handleLoginClick: () => {
    },
    handleLoginClose(): void {
    },
    setShowModal(value: ((prevState: boolean) => boolean) | boolean): void {
    },
    showRegisterModal: false,
    handleRegisterClick: () => {
    },
    handleRegisterClose(): void {
    },
    setShowRegisterModal(value: ((prevState: boolean) => boolean) | boolean): void {
    }
});

const NavState: FC<PropsWithChildren> = ({children}) => {
    const [isMenuOpen, toggleMenu] = useState(false);
    const [isUserMenuOpen, setUserMenu] = useState<boolean>(false)
    const [showModal, setShowModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [isUnauthorizedUserMenuOpen, setUnauthorizedUserMenuOpen] = useState(false)
    const [isUserAuth, setUserAuth] = useState<boolean>(true)
    const [isAuthorizedUserMenuOpen, setAuthorizedUserMenuOpen] = useState<boolean>(false)
    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    const handleRegisterClick = () => {
        setShowRegisterModal(true);
    };

    const handleRegisterClose = () => {
        setShowRegisterModal(false);
    };

    const handleLoginClick = () => {
        setShowModal(true);
    };

    const handleLoginClose = () => {
        setShowModal(false);
    };

    function toggleUnauthorizedUserMenuMode() {
        if (isUserAuth)
            setUnauthorizedUserMenuOpen(!isUnauthorizedUserMenuOpen)
        else
            setUserMenu(!isUserMenuOpen);
    }



    return (
        <MenuContext.Provider value={{
            isMenuOpen,
            toggleMenuMode,
            isUserMenuOpen,
            toggleUnauthorizedUserMenuMode,
            showModal,
            handleLoginClick,
            setShowModal,
            handleLoginClose,
            handleRegisterClick,
            handleRegisterClose,
            showRegisterModal,
            setShowRegisterModal,
            setUnauthorizedUserMenuOpen,
            isUnauthorizedUserMenuOpen,
            isUserAuth,
            setUserAuth,
            isAuthorizedUserMenuOpen

        }}>{children}</MenuContext.Provider>
    );
};


export default NavState;
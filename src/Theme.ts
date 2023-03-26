import { createTheme } from '@mui/material';

const theme = createTheme({
    palette : {
        primary : {
            main : '#6a1acb'
        },
        secondary: {
            main: '#edf2ff',
        },
    }
});



const styledTheme = {
    colors: {
        primary: "#6a1acb",
        secondary: "#edf2ff",
    },
    media: {
        phone: "(max-width: 425px)",
        tablet: "(max-width: 900px) and (min-width: 425px)",
        phoneAndTablet : "(max-width: 900px)"
    }
}

export {theme, styledTheme}
import { createTheme } from '@mui/material';

const theme = createTheme({
    palette : {
        primary : {
            main : '#294421'
        },
        secondary: {
            main: '#edf2ff',
        },
    }
});



const styledTheme = {
    colors: {
        primary: "#294421",
        secondary: "#edf2ff",
    },
    media: {
        phone: "(max-width: 600px)",
    }
}

export {theme, styledTheme}
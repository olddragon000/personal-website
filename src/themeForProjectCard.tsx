import {createTheme} from "@mui/material";
import "./theme.css"

const theme = createTheme({
    palette: {
        primary: {
            main: "#EF7B45"
        }
    },
    typography: {
        fontFamily: "Space Mono",
        h1: {
            fontSize: "2rem",
            fontWeight: 1000
        },
        body1: {
            fontSize: "1rem",
        },

        subtitle2: {
            fontFamily: "Space Mono",
            fontWeight: 700
        }
    }
})

export default theme
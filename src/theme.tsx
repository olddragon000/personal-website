import {createTheme} from "@mui/material";
import "./theme.css"
const theme= createTheme({
    palette:{
        primary:{
            main:"#EF7B45"
        },
        secondary:{
            main: "#4C956C"
        }
    },
    typography:{
        h2:{
            fontSize: "4rem",
            fontWeight: 600
        },
        h3:{
            fontSize: "4rem",
            fontWeight: 500
        },
        h4:{
            fontSize: "2rem",
            fontWeight: 500
        },
        // navbar
        h5:{
            fontFamily: "Ultra",
            fontSize: "3rem",
            color: "#EF7B45",
        },
        h6: {
            fontFamily: "Ultra",
            fontSize: "1.5rem",
        },
        body1: {
            fontFamily: "Space Mono"
        },
        subtitle1:{
            fontSize:"2rem",
            fontWeight: 600
        },
    }
})

export default theme
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
        fontFamily:"Space Mono",
        h1:{
            fontFamily:"Ultra",
            fontSize: "4rem",
        },
        h2:{
            marginTop: "2rem",
            fontSize:"2rem",
            fontWeight: 700
        },
        h3:{
            paddingLeft:"4rem",
            marginTop: "1.5rem",
            fontSize:"1.5rem",
            fontWeight: 700
        },
        h4:{
            paddingLeft:"4rem",
            marginTop: "1rem",
            fontSize:"1rem",
            fontWeight: 700
        },
        body1:{
            paddingLeft:"4rem",
            marginTop: "1.5rem",
            fontSize:"1rem",
        },
        subtitle1:{
            fontSize:"1rem",
        }
    }
})

export default theme
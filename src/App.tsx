import React, {useCallback, useEffect, useState} from 'react';
import {Box, SpeedDial, SpeedDialAction, ThemeProvider} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import theme from "./theme";
import NavBar from "./components/NavBar";
import "./App.css";
import MainTop from "./components/MainTop";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ProjectIterativeDesign
    from "./components/projects/IterativeDesign/ProjectIterativeDesign";
import ProjectResponsiveRedesign
    from "./components/projects/ResponsiveRedesign/ProjectResponsiveRedesign";
import ProjectSiftFrontendDev
    from "./components/projects/SiftFrontendDev/ProjectSiftFrontendDev";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


export default function App() {
    //home, project0,project1,project2
    const [whichPage, setWhichPage] = useState("home")
    const speedDialActions = [
        {icon: <LinkedInIcon/>, name: 'LinkedIn'},
        {icon: <EmailIcon/>, name: 'Email'},
    ];

    const [y, setY] = useState(window.scrollY);
    const [showNavBar, setShowNavBar] = useState(true);

    const handleNavigation = useCallback(
        (e: { currentTarget: any; }) => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                setShowNavBar(true);
            } else if (y < window.scrollY) {
                if (y > 800){
                    setShowNavBar(false);
                }

            }
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <ThemeProvider theme={theme}>
            <Box
                onMouseEnter={()=>{setShowNavBar(true)}}
                sx={{
                    width:"100%",
                    height:200,
                    // backgroundColor:"red",
                    position: "fixed",
                    top: 0
                }}/>
            <NavBar whichPage={whichPage} setWhichPage={setWhichPage} isScrollingUp={showNavBar}/>
            <SpeedDial ariaLabel="Contact Me"
                       sx={{
                           '& .MuiFab-primary': {width: 80, height: 80},
                           position: "fixed",
                           bottom: "10%",
                           right: "10%"
                       }}
                       icon={<CallIcon sx={{width: 40, height: 40}}/>}>
                {speedDialActions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
            {(whichPage === "home") && <Box
                sx={{
                    // minHeight: "2000",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 10,
                }}>
                <MainTop/>
                <AboutMe/>
                <Projects whichPage={whichPage} setWhichPage={setWhichPage}/>
            </Box>}
            {(whichPage === "project0") && <ProjectIterativeDesign/>}
            {(whichPage === "project1") && <ProjectResponsiveRedesign/>}
            {(whichPage === "project2") && <ProjectSiftFrontendDev/>}
            {/*<Footer/>*/}


        </ThemeProvider>
    );
}
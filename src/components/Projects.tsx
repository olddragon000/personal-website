import {Box, keyframes, Slide, ThemeProvider, Typography} from "@mui/material";
import React, {useRef, useState} from "react";
import ProjectCard from "./ProjectCard";
import themeForProjectCard from "../themeForProjectCard";
interface ProjectsProps{
    whichPage: string
    setWhichPage: React.Dispatch<React.SetStateAction<string>>
}

export default function Projects(props: ProjectsProps) {
    const selectPushToRight = keyframes`
  from {
    padding-left: 0;
    box-shadow:;
    color:;
  }

  to {
    padding-left: 1rem;
    box-shadow: -5px 0px 0px 0px #4C956C;
    color: #4C956C;

  }
`;

    const onHoverStyle = (n: number) => {
        return {
            "&:hover": {
                backgroundColor: "#EF7B45",
                transition: "background-color 1000ms linear;"
            },
            cursor: "pointer",
            animation: (selected == n) ? `${selectPushToRight} 1s ease forwards` : "",
        }
    };

    const [selected, setSelected] = useState<number>(0);

    const containerRef = useRef(null);
    return (
        <Box
            id={"projects"}
            sx={{
                paddingTop: 10,
                minWidth: "50%",
                maxWidth: "70%",
            }}>
            <Box sx={{marginBottom: 3}}>
                <Typography variant={"subtitle1"}>
                    <span className={"green"}>02.</span>Projects
                </Typography>
            </Box>
            <Box sx={{display: "flex", width: 800}}>
                <Box sx={{width: "30%", paddingTop:"2.5rem", marginRight:"2rem",zIndex: 99}}>
                    <Box
                        onClick={() => {
                            setSelected(0)
                        }}
                        sx={{
                            ...onHoverStyle(0),
                        }}>
                        <Typography variant="body1">
                            Product Design:
                        </Typography>
                        <Typography variant="body1">
                            Winno
                        </Typography>
                    </Box>
                    <Box
                        onClick={() => {
                            setSelected(1)
                        }}
                        sx={{
                            ...onHoverStyle(1),
                        }}>
                        <Typography variant="body1">
                            Usability Redesign:
                        </Typography>
                        <Typography variant="body1">
                            Poshmark
                        </Typography>
                    </Box>
                    <Box
                        onClick={() => {
                            setSelected(3)
                        }}
                        sx={{
                            ...onHoverStyle(3),
                        }}>
                        <Typography variant="body1">
                            Website Frontend Dev:
                        </Typography>
                        <Typography variant="body1">
                            Bakery
                        </Typography>
                    </Box>
                    <Box
                        onClick={() => {
                            setSelected(2)
                        }}
                        sx={{
                            ...onHoverStyle(2),
                        }}>
                        <Typography variant="body1">
                            Building a Startup:
                        </Typography>
                        <Typography variant="body1">
                            Sift
                        </Typography>
                    </Box>

                </Box>

                <Box ref={containerRef} sx={{width: "70%", overflow: 'hidden'}}>
                    {[0, 1, 2,3].map((index: number) => (
                        <Slide direction={"right"} in={selected == index}
                               mountOnEnter unmountOnExit
                               container={containerRef.current}>

                            <Box sx={{width: "100%", height: 1000}}>
                                <ThemeProvider theme={themeForProjectCard}>
                                    <ProjectCard index={index} setWhichPage={props.setWhichPage}/>
                                </ThemeProvider>
                            </Box>

                        </Slide>
                    ))}

                </Box>
            </Box>
        </Box>
    )
}

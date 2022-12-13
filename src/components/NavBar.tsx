import {Box, Fade, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-scroll/modules";
import * as Scroll from 'react-scroll';

interface NavBarProps {
    whichPage: string
    setWhichPage: React.Dispatch<React.SetStateAction<string>>
    isScrollingUp: boolean
}


export default function NavBar(props: NavBarProps) {

    // let scroller = Scroll.scroller;
    let scroll = Scroll.animateScroll;
    return (
        <Fade in={props.isScrollingUp}>
            <Box
                sx={{
                    position: "sticky",
                    top: 0
                }}>


                <Box
                    sx={{
                        flexGrow: 1,
                        marginTop: 2,
                        marginLeft: {
                            xs: 2,
                            md: 5
                        },
                        marginRight: {
                            xs: 2,
                            md: 5
                        },
                        position: "relative"
                    }}>
                    <Box
                        sx={{
                            display: "flex",
                        }}>
                        <Typography variant="h5" component="div"
                                    sx={{
                                        cursor: "pointer",
                                        flexGrow: 20,
                                        display: "flex",
                                        alignItems: "center"
                                    }}>

                            {(props.whichPage === "home") && (
                                <Link to="top" spy={true}
                                      smooth={true}>
                                    N/A
                                </Link>)}

                            {(props.whichPage !== "home") && (
                                <Link to="top" spy={true}
                                      smooth={true}
                                      onClick={() => {
                                          props.setWhichPage("home");
                                          scroll.scrollToTop();
                                      }}>
                                    N/A
                                </Link>
                            )}

                        </Typography>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                cursor: "pointer",
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                            }}>
                            {(props.whichPage === "home") && (
                                <Link to="about" spy={true}
                                      smooth={true}>
                                    about
                                </Link>)}
                            {/*{(props.whichPage !== "home") && (*/}
                            {/*    <Link to="about" spy={true}*/}
                            {/*          smooth={true} onClick={() => {*/}
                            {/*        props.setWhichPage("home");*/}
                            {/*    }}>*/}
                            {/*        about*/}
                            {/*    </Link>*/}
                            {/*)}*/}
                        </Typography>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                cursor: "pointer",
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                            }}>
                            {(props.whichPage === "home") && (
                                <Link to="projects" spy={true}
                                      smooth={true}>
                                    projects
                                </Link>)}
                            {/*{(props.whichPage !== "home") && (*/}
                            {/*    <Link to="projects" spy={true}*/}
                            {/*          smooth={true} onClick={() => {*/}
                            {/*        props.setWhichPage("home");*/}
                            {/*    }}>*/}
                            {/*        projects*/}
                            {/*    </Link>*/}
                            {/*)}*/}
                        </Typography>
                        <Typography
                            variant="h6" component="div" sx={{
                            cursor: "pointer",
                            flexGrow: 1,
                            display: "flex",
                            alignItems: "center"
                        }}>

                            {(props.whichPage === "home")? "resume":""}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Fade>
    )
}
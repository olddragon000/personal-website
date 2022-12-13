import {Box, Grid, Typography} from "@mui/material";
import "./AboutMe.css";
import fakePic from "../asset/rich_b.jpeg";
import {useRef} from "react";
import useOnScreen from "./useOnScreen";


const bio: string = "My name is [ANONYMOUS], and I'm a third year student " +
    "student studying Computer Science at Brown University. I love finding and " +
    "addressing problems in products, and I am most passionate about creating " +
    "scalable and impactful products to make people's lives more convenient."
export default function AboutMe() {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    return (
        <Box
            id={"about"}
            ref={ref}
            sx={{
                minWidth: 500,
                maxWidth: "70%",
                // paddingLeft:20,
                paddingBottom: 10,
                paddingTop: 10,
            }}>

            <Box>
                <Typography variant={"subtitle1"}>
                    <span className={"green"}>01.</span>About Me
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                }}>
                <Grid container spacing={2} sx={{}}>
                    <Grid item sm={12} md={6}>
                        <Typography variant={"body1"}
                                    style={{whiteSpace: 'pre-line'}}
                                    sx={{marginLeft: 6}}>
                            {bio}
                        </Typography>

                    </Grid>
                    <Grid item sm={12} md={6}
                          sx={{display: "flex", justifyContent: "center"}}>
                        <Box
                            sx={{
                                maxWidth: "70%",
                            }}>
                            <Box
                                sx={{
                                    backgroundColor: "#EF7B45",

                                    boxShadow: "2rem 2rem #4C956C"
                                }}>
                                <Box component={"img"} src={fakePic}
                                     sx={{}}/>
                            </Box>

                        </Box>
                    </Grid>

                </Grid>

            </Box>

        </Box>
    )
}
import {Box, Grid, Typography} from "@mui/material";
import jzPic from "../asset/anonymous1.png";
import React, {useRef} from "react";
import useOnScreen from "./useOnScreen";

export default function MainTop() {

    const ref = useRef()
    const isVisible = useOnScreen(ref)

    return (
        <Box id={"top"} ref={ref}>
            <Box>
                <Box
                    sx={{
                        // backgroundColor: "red",
                        minHeight: 600,
                        padding: {
                            xs: 5,
                            md: 10,
                        }
                    }}>
                    <Grid container spacing={2}
                          sx={{}}>
                        <Grid item sm={6} xs={12}
                              sx={{
                                  marginTop: 10,
                                  display: "flex",
                                  flexDirection: "column",
                                  paddingRight: "10%",
                                  alignItems: "end",
                                  minWidth: 500,
                                  textAlign: "right",
                              }}>
                            <Box>
                                <Typography variant={"h3"}>
                                    Hi! My name is <b
                                    className={"JZ"}>Anonymous</b>
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    marginTop: 2
                                }}>
                                <Typography variant={"h2"}>
                                    匿名
                                </Typography>
                            </Box>
                            <Box sx={{
                                marginTop: 3
                            }}>
                                <Typography variant={"h4"}>
                                    Product Designer
                                </Typography>
                            </Box>
                            <Box sx={{
                                marginTop: 2
                            }}>
                                <Typography variant={"h4"}>
                                    Frontend Developer
                                </Typography>
                            </Box>
                            <Box sx={{
                                marginTop: 2
                            }}>
                                <Typography variant={"h4"}>
                                    Startup Founder
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}>
                                <Box
                                    component="img"
                                    alt="A picture of me(JZ)"
                                    src={jzPic}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
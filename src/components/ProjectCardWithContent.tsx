import {Box, Button, Typography} from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import React from "react";
import * as Scroll from "react-scroll";

interface CardIterativeDesignProps {
    setWhichPage: React.Dispatch<React.SetStateAction<string>>,
    title: string,
    description: string,
    image: any,
    keywords: string[],
    pageName: string
}


export default function ProjectCardWithContent(props: CardIterativeDesignProps) {
    let scroll = Scroll.animateScroll;
    return (
        <Box>
            <Typography variant="h1">
                {props.title}
            </Typography>
            <Typography variant="body1" style={{whiteSpace: 'pre-line'}}>
                {props.description}
            </Typography>
            <Button
                sx={{
                    margin: "1rem 0rem"
                }}
                variant="contained" onClick={() => {

                switch (props.pageName){
                    case "project1":
                        window.open("https://olddragon000.github.io/responsive-redesign/");
                        break;
                    case "project2":
                        window.open("https://www.letsift.com/");
                        break;
                    case "project3":
                        window.open("https://olddragon000.github.io/cs1300-development/");
                        break;
                    default:
                        props.setWhichPage(props.pageName);
                        scroll.scrollToTop();

                }



            }}>
                <Typography variant={"body1"}>
                    LEARN MORE
                </Typography>
                <LaunchIcon/>
            </Button>

            <Box sx={{display: "flex", flexDirection:"row", marginBottom:"1rem"}}>
                <Typography variant={"subtitle2"} sx={{color:"#4C956C", marginRight:2}}>
                    Skills:
                </Typography>
                {props.keywords.map((keyword: string) => {
                    return (
                        <Box sx={{marginRight:"2rem"}}>
                            <Typography variant={"subtitle2"}>
                                {keyword}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
            <Box component={"img"} src={props.image}/>
        </Box>
    )
}
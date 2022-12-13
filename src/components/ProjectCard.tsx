import {Box} from "@mui/material";
import ProjectCardWithContent from "./ProjectCardWithContent";
import React from "react";
import winnoImg from "./projects/IterativeDesign/asset/intro-image.jpeg";
import poshmarkImg
    from "./projects/ResponsiveRedesign/asset/Poshmark-intro.png";
import siftImg from "./projects/SiftFrontendDev/asset/sift.png";
import bakeryImg from "./projects/Bakery/development.png";

interface ProjectCardProps {
    index: number
    setWhichPage: React.Dispatch<React.SetStateAction<string>>
}

const iterativeDesignContent = {
    title: "Product Design: Winno",
    pageName: "project0",
    description: "Winno is a Y-Combinator backed startup that lets user text " +
        "messages to monetize exclusive content and 1:1 interactions. Without " +
        "looking at the actual product made by Winno, my team decided to design " +
        "a product solving the same problem that Winno solves. \n\nMore sprecifically, " +
        "we tried to design a product that addresses 2 key needs. \n1. people want to " +
        "connect with experts in different fields to ask their pressing questions." +
        "\n  2. experts and creators want to own their audience and get paid " +
        "directly by their top fans",
    keywords: ["Figma", "Product Design", "User Testing"],
    image: winnoImg
}

const responsiveRedesignContent = {
    title: "Website Usability Redesign: Poshmark",
    pageName: "project1",
    description: "As someone who frequently browses online secondhand shops, " +
        "I noticed that the shopping experience on Poshmark has often been " +
        "sub-optimal. However, it has one of the largest databases of secondhand " +
        "apparel products, so I decided to redesign the landing page of Poshmark " +
        "to make it easier for users to shop." +
        "\n\nAs I was redesigning the webpage, " +
        "I tried to keep in mind the goals that the original webpage was trying " +
        "to achieve so that I can make the webpage more usable without " +
        "sacrificing the original goals of the page. At the same time, I tried to" +
        "make sure that the website is responsive to different screen sizes",
    keywords: ["Bootstrap", "HTML", "CSS"],
    image: poshmarkImg
}

const siftContent = {
    title: "Building a Tech Startup: Sift",
    pageName: "project2",
    description: "I put my product design and frontend development skills to test " +
        "with my startup Sift. \n\nEven though 70% of Americans are willing to purchase " +
        "secondhand clothing items, only 30% do. Shopping secondhand, especially online, is not " +
        "as popular as it should be because people already have a habit of shopping on fast " +
        "fashion sites and secondhand sites are harder to navigate. \n\nSift is a Chrome extension" +
        " that allows people to find secondhand alternatives to the fast fashion " +
        "products that they are interested in within a click.\n\nI was in charge " +
        "of the entire frontend development process. content scripts, I built an extension " +
        "that can extract product information on a page, " +
        "send product information to the backend, receive recommendations and display products " +
        "on the webpage.",
    keywords: ["React", "MUI", "Asynchronous Programming"],
    image: siftImg
}


const developmentContent = {
    title: "Frontend Development: Bakery",
    pageName: "project3",
    description: "Apart from designing products and addressing usability problems, " +
        "I am also familiar with the actual implementation of the frontend that the users " +
        "can interact with. In this project, I implemented an imaginary online bakery that allows " +
        "users to sort, filter through the products and add/remove products from the shopping " +
        "cart. ",
    keywords: ["React", "Ant Design"],
    image: bakeryImg
}


export default function ProjectCard(props: ProjectCardProps) {

    let project;
    switch (props.index) {
        case 0:
            project =
                <ProjectCardWithContent setWhichPage={props.setWhichPage}
                                        description={iterativeDesignContent.description}
                                        image={iterativeDesignContent.image}
                                        pageName={iterativeDesignContent.pageName}
                                        keywords={iterativeDesignContent.keywords}
                                        title={iterativeDesignContent.title}/>
            break;
        case 1:
            project = <ProjectCardWithContent setWhichPage={props.setWhichPage}
                                              description={responsiveRedesignContent.description}
                                              image={responsiveRedesignContent.image}
                                              pageName={responsiveRedesignContent.pageName}
                                              keywords={responsiveRedesignContent.keywords}
                                              title={responsiveRedesignContent.title}/>
            break;
        case 2:
            project = <ProjectCardWithContent setWhichPage={props.setWhichPage}
                                              description={siftContent.description}
                                              image={siftContent.image}
                                              pageName={siftContent.pageName}
                                              keywords={siftContent.keywords}
                                              title={siftContent.title}/>
            break;
        case 3:
            project = <ProjectCardWithContent setWhichPage={props.setWhichPage}
                                              description={developmentContent.description}
                                              image={developmentContent.image}
                                              pageName={developmentContent.pageName}
                                              keywords={developmentContent.keywords}
                                              title={developmentContent.title}/>
            break;

        default:
            project =
                <Box>
                    Not Implemented yet
                </Box>
    }
    return project;
}
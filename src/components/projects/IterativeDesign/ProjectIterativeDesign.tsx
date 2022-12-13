import {Box, List, ListItem, ThemeProvider, Typography} from "@mui/material";
import introImg from "./asset/intro-image.jpeg";
import themeForProject from "../../../themeForProject";

export default function ProjectIterativeDesign() {

    function importAll(r: any) {

        // Use these line if you like to access arrays using an integer index.
        let images: any[] = [];
        r.keys().map((item: any, index: any) => {
            images.push(r(item));
        });

        ////Use these line if you want to access each image using the file name.
        //let images = {};
        //r.keys().map((item, index) => { images[item.replace('./','')] = r(item); });

        return images;
    }

    const sketches = importAll(require.context("./asset/sketches", false, /\.(png|jpe?g|svg)$/));
    const wireframes = importAll(require.context("./asset/wireframes", false, /\.(png|jpe?g|svg)$/));

    return (
        <ThemeProvider theme={themeForProject}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: 2000
            }}>
                <Box component={"img"} src={introImg}
                     alt={"an image for the project: iterative design of Winno"}
                     sx={{
                         maxWidth: {
                             xs: "90%",
                             sm: "80%",
                             md: 600,
                             lg: 800
                         },
                         marginBottom: {
                             xs: 2,
                             sm: 5
                         }
                     }}/>
                <Box sx={{
                    maxWidth: {
                        xs: "90%",
                        sm: "80%",
                        md: 800,
                        lg: 1000
                    },
                    height: 500,
                    // textAlign: "left"
                }}>
                    <Typography variant={"h1"}>
                        Iterative Design: Winno
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        Collaborators: XXXX, XXXX, XXXX
                    </Typography>

                    <Typography variant={"h2"}>
                        I. Sketching & Wireframing
                    </Typography>
                    <Typography variant={"h3"}>
                        Pre-Design Thinking: Introducing The Interface
                    </Typography>
                    <Typography variant={"body1"}>
                        For this project, our team decided to work on Winno, a
                        mobile app designed to allow users to connect with
                        experts to answer pressing questions with insight into
                        different industries. Through this application, we
                        address 2 key needs. First, users who want to learn want
                        to connect with experts in different fields to answer
                        pressing questions. Second, experts and creators want to
                        own their audience and get paid directly by their top
                        fans. Winno does just that. It allows users to discover
                        experts and to schedule text sessions, and experts get
                        paid for helping out and doing what they love.
                    </Typography>

                    <Typography variant={"h3"}>
                        Initial Sketches
                    </Typography>
                    <Box sx={{
                        marginTop: "2rem",
                        marginLeft: "4rem",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        height: 500,
                        backgroundColor: themeForProject.palette.primary.main,
                        boxShadow: "2rem 2rem #4C956C",
                        padding: "2rem",
                    }}>
                        <Box
                            sx={{
                                textAlign: "left",
                                whiteSpace: "nowrap",
                                overflowY: "hidden",

                            }}>
                            {sketches.map((sketch) => {
                                return (

                                    <Box sx={{
                                        height: 400,
                                        display: 'inline-block',
                                        verticalAlign: "middle",
                                        maxWidth: 200,
                                        // marginRight:"1rem",
                                        width: '100%',
                                    }} component={"img"} src={sketch}/>

                                )
                            })}
                        </Box>
                    </Box>
                    <Typography variant={"h3"} sx={{marginTop: "5rem"}}>
                        Combining Ideas into a Wireframe
                    </Typography>
                    <Box sx={{
                        marginTop: "2rem",
                        marginLeft: "4rem",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        height: 500,
                        backgroundColor: themeForProject.palette.primary.main,
                        boxShadow: "2rem 2rem #4C956C",
                        padding: "2rem"
                    }}>
                        {wireframes.map((wireframe) => {
                            return (<Box
                                sx={{
                                    height: 400,
                                    display: 'inline-block',
                                    verticalAlign: "middle",
                                    maxWidth: 200,
                                }} component={"img"} src={wireframe}/>)
                        })}
                    </Box>
                    <Typography variant={"h2"} sx={{marginTop: "5rem"}}>
                        II. Mockups
                    </Typography>
                    <Typography variant={"h3"}>
                        Version 1: Pre-Critique
                    </Typography>

                    <iframe style={{
                        marginTop: "2rem",
                        marginLeft: "4rem",
                        border: "1px solid rgba(0, 0, 0, 0.1)"
                    }}
                            width="800" height="450"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FgJqvNYfj2K9s0I5hGPJJew%2FPre-crit%3Fnode-id%3D10%253A84%26scaling%3Dscale-down%26page-id%3D10%253A54%26starting-point-node-id%3D10%253A84%26show-proto-sidebar%3D1"
                            allowFullScreen></iframe>
                    <Typography variant={"h3"}>
                        What We Did
                    </Typography>


                    <Typography variant={"body1"}>
                        Implemented a rudimentary design/user flow that
                        encompasses the browsing experts and messing experts
                        feature of the app
                    </Typography>

                    <Typography variant={"h3"}>
                        Classmates & Industry Expert Critique Feedback
                    </Typography>


                    <List
                        sx={{
                            marginLeft: "4rem",
                            listStyleType: 'disc',
                            pl: 2,
                            '& .MuiListItem-root': {
                                display: 'list-item',
                            },
                        }}>
                        <ListItem>
                            <Typography variant={"body1"}>
                                The size of buttons on the main and subcategory
                                pages are small, which makes them harder to
                                notice
                            </Typography>

                        </ListItem>

                        <ListItem>
                            <Typography variant={"body1"}>
                                The profile pictures on the main and subcategory
                                pages are small, which makes the users struggle
                                to see them clearly
                            </Typography>

                        </ListItem>

                        <ListItem>
                            <Typography variant={"body1"}>
                                The back button on the message page plus the
                                navigation bar creates confusion in navigation
                            </Typography>

                        </ListItem>

                        <ListItem>
                            <Typography variant={"body1"}>
                                The animation of the navigation bar creates a
                                confusing mental model
                            </Typography>

                        </ListItem>
                    </List>


                    <br/>
                    <Typography variant={"h3"}>
                        Version 2: Post-Critique
                    </Typography>

                    <iframe style={{
                        marginTop: "2rem",
                        marginLeft: "4rem",
                        border: "1px solid rgba(0, 0, 0, 0.1)"
                    }}
                            width="800" height="450"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fr0gedeQDX7fsYlYv7v7knz%2FPre-User-Test%3Fnode-id%3D233%253A1179%26scaling%3Dscale-down%26page-id%3D10%253A54%26starting-point-node-id%3D233%253A1179"
                            allowFullScreen></iframe>
                    <Typography variant={"h3"}>
                        What We Did
                    </Typography>


                    <List
                        sx={{
                            marginLeft: "4rem",
                            listStyleType: 'disc',
                            pl: 2,
                            '& .MuiListItem-root': {
                                display: 'list-item',
                            },
                        }}>
                        <ListItem>
                            <Typography variant={"body1"}>
                                Enlarged profile pictures and buttons across the
                                board
                            </Typography>

                        </ListItem>

                        <ListItem>
                            <Typography variant={"body1"}>
                                Added visual design details to provide the
                                visual depth, usability hints, higher contrast
                                and attractiveness to the page
                            </Typography>

                        </ListItem>

                        <ListItem>
                            <Typography variant={"body1"}>
                                Switch the nav bar page transition from stacking
                                pages to dissolve to distinct in page navigation
                                and nav bar navigation
                            </Typography>

                        </ListItem>

                        <ListItem>
                            <Typography variant={"body1"}>
                                Redesigned the “My Upcoming Session” cards to
                                emphasize the meeting time and the join button
                            </Typography>

                        </ListItem>

                        <ListItem>
                            <Typography variant={"body1"}>
                                Redesigned the cards in the “Top Creator”
                                sub-category page. Implemented tags to make user
                                extract the key information in a more intuitive
                                way.
                            </Typography>

                        </ListItem>

                        <ListItem>
                            <Typography variant={"body1"}>
                                Added a media carousel for the expert profile
                                page so the user can better learn about the
                                expert’s work and expertise

                            </Typography>

                        </ListItem>

                    </List>
                    <Typography variant={"h2"}>
                        III. User Testing
                    </Typography>

                    <Typography variant={"h3"}>
                        User Testing Design
                    </Typography>

                    <Typography variant={"body1"}>
                        <b>Task: </b>
                        Please think aloud to let up know what you notice, what
                        you think about the app, and what you intend with your
                        actions. Also, I just want to let you know that you can
                        be completely honest about your experience with the
                        applications, we appreciate your input.
                    </Typography>

                    <Typography variant={"body1"}>
                        <b>Context: </b>
                        This is a mobile prototype so everything inside of the
                        Figma file will not be clickable. Please use the mic to
                        explain through your thinking process as this will help
                        us gather your valuable input about the app. Thank you!
                    </Typography>

                    <Typography variant={"body1"}>
                        <b>Scenario: </b>
                        You hurt your hips playing basketball and the pain has
                        been bugging you for weeks. You want to find an expert
                        that can recommend stretching exercises for recovery and
                        pain relief.
                    </Typography>

                    <Typography variant={"body1"}>
                        <b>Main Objective: </b>
                        Browse the app and schedule an appointment with an
                        expert that you think can best help with your injury.
                    </Typography>

                    <Typography variant={"h3"}>
                        Analysis of Results
                    </Typography>

                    <Typography variant={"body1"}>
                        <b>
                            Task 1: Without leaving the page, tell us what you
                            notice and what you can do on this page. [Verbal
                            response]
                        </b>
                    </Typography>

                    <Typography variant={"body1"}>
                        For the first task we wanted to get the users initial
                        impressions of the home page to see if there were any
                        things that stood out to them in a positive or negative
                        way. This might give us insight on how different users
                        perceived the functionality of the app. User one and
                        user two gave positive feedback on organization and
                        design of the home page. They said that the layout was
                        simple and that it displayed the product in a direct and
                        straightforward way. User one made a comment on the
                        color scheme of the app which was similar to “facebook
                        colors” to him. This made him feel like the app was
                        affiliated with the company or had messaging
                        functionality. User three also liked the layout of the
                        home page but did mention that the information is a
                        little overwhelming. We expected users to have a variety
                        of impressions, but it was definitely good to see that
                        all three recognized the main functionality of the app
                        which was to connect users with experts in different
                        fields. The comments made on the simplicity of our
                        layout proved that our design is user-friendly.
                    </Typography>

                    <Typography variant={"body1"}>
                        <b>Task 2: Imagine you hurt your hips and the pain has
                            been bugging you for weeks. Browse the app and
                            schedule an appointment with a stretching expert to
                            help with your injury. Think out loud as you perform
                            this task and tell us what functionality is missing
                            if any. [5-point rating scale: Very difficult to
                            Very easy]
                        </b>
                    </Typography>

                    <Typography variant={"body1"}>
                        We wanted to simulate a use case of the app by giving
                        users a scenario they need the app for. This task also
                        allows users to interact with the key functionalities of
                        the app and to show us if there are any issues with our
                        implementation. All three users were able to complete
                        the task successfully and gave the task a rating of 5
                        which represented very easy. In the video it seemed that
                        the interactive elements were intuitively placed. User
                        one was not able to find the stretching expert directly
                        but after clicking around the categories she was able to
                        find it. Even though she struggled a little bit, in the
                        audio recording she described the process as “simple”
                        and “straightforward”. User two was able to find the
                        stretching expert directly and said that everything was
                        “where they were supposed to be”. User three was
                        expecting the stretching expert to be located in a
                        different subcategory because she didn’t see the labels
                        of the specialty fields we had put under the name of the
                        experts. She was still able to complete the task fairly
                        quickly and the fact that she struggled in the beginning
                        didn’t bother her too much. We were expecting some users
                        to struggle in this process because of the missing
                        functionality that wasn’t relevant to the task but in
                        general users did well. They were also able to complete
                        the tasks much faster than we expected and all described
                        the process as very easy.
                    </Typography>

                    <Typography variant={"body1"}>
                        <b>
                            Task 3:Outside of playing sports you are also an
                            entrepreneur trying to start a yoga studio. You
                            scheduled an appointment with Amy Nguyen, a yoga
                            youtuber, for advice on this venture. The session is
                            starting so please join the chat. Talk us through
                            your thought process. [5-point rating scale: Very
                            difficult to Very easy]
                        </b>
                    </Typography>

                    <Typography variant={"body1"}>
                        Since users already took a close look at the home page
                        in the first task, this task proved to be fairly easy
                        for all the users that tested our application. The home
                        page already provided a one click access to Amy’s
                        messages so users did not struggle with understanding
                        that a session was currently being held. Our
                        expectations matched the users’ inputs with all of them
                        succeeding with the task; however, one small behavior
                        that did not match our expectation was how two of the
                        three users did not check the messages tab to text Amy.
                        This was not a problem as there were two routes to take
                        to succeed in this task: checking the messages tab or
                        going to Amy’s chat directly through the home page.
                        Since both routes resulted in the task being completed,
                        the fact that most of our users went with the second
                        route surprised us a little, but it did not affect their
                        success.
                    </Typography>

                    <Typography variant={"body1"}>
                        <b>
                            Post-test Question 1: What did you like and dislike
                            about the prototype?
                        </b>
                    </Typography>

                    <Typography variant={"body1"}>
                        All users spoke on the aesthetic design of the app,
                        calling it “appealing and attractive” and “easy to look
                        at”. All three users found the app well-organized,
                        well-planned, and user friendly. They liked the
                        simplicity of the design and commented about how it was
                        easy to navigate through the information presented to
                        them in the home screen. As for negative feed, some
                        users did not like the layout of the home page. They
                        stated that the amount of information proved to be “a
                        little overwhelming.” One other also stated that they
                        would like a video option to call the influencer instead
                        of conversing over text. Overall, comments during the
                        video call were positive and we iterated upon our
                        previous design to address these concerns.
                    </Typography>

                    <Typography variant={"body1"}>
                        <b>
                            Post-test Question 2: How else do you see yourself
                            using this app?
                        </b>
                    </Typography>

                    <Typography variant={"body1"}>
                        For this final post-test question, users saw themselves
                        using the app for healthy cooking inspiration, gym
                        workouts, or even took on the role of the professional,
                        saying that it could be used to help out small
                        businesses. Others saw it as an opportunity to advance
                        their careers, using the application to receive
                        individual feedback and advice. Overall, each of our
                        users saw the app in a different light, which speaks to
                        how the app could provide service to users in a variety
                        of ways.
                    </Typography>


                    <Typography variant={"h3"}>
                        Final Version: Post User Testing
                    </Typography>

                    <iframe style={{
                        marginTop: "2rem",
                        marginLeft: "4rem",
                        border: "1px solid rgba(0, 0, 0, 0.1)"
                    }}
                            width="800" height="450"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FgJqvNYfj2K9s0I5hGPJJew%2FPre-crit%3Fnode-id%3D10%253A84%26scaling%3Dscale-down%26page-id%3D10%253A54%26starting-point-node-id%3D10%253A84%26show-proto-sidebar%3D1"
                            allowFullScreen></iframe>


                    <Typography variant={"h3"}>
                        What We Did
                    </Typography>


                    <List
                        sx={{
                            marginLeft: "4rem",
                            listStyleType: 'disc',
                            pl: 2,
                            '& .MuiListItem-root': {
                                display: 'list-item',
                            },
                        }}>
                        <ListItem>
                            <Typography variant={"body1"}>
                                Added a confirmation pop-up after the user click
                                the confirmation button on the booking page,
                                which allows them to double check their
                                session’s time and the expert they booked.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant={"body1"}>
                                Add a Note for The Expert section at the booking
                                page so that the user can communicate what they
                                want to discuss with the expert in the session
                                beforehand.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant={"body1"}>
                                Fixed spelling errors and inconsistencies in
                                user journey in prototype
                            </Typography>

                        </ListItem>
                    </List>


                </Box>
            </Box>
        </ThemeProvider>
    )
}
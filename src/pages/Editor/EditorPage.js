import { Container, Stack, Box ,Typography, Button} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import React, { useState } from "react";
import {editorStyle, editorStyle} from './editor.style';
import { deepOrange, green } from '@mui/material/colors';
import Editor from "./Editor";

function Client(props) {
    const editorStyles = props.classesPro;
    const userData = props.userData;
    return(
        <Stack direction="column"  justifyContent="center" alignItems="center" className="userWrapper">
            <Avatar  sx={{ bgcolor: deepOrange[500] }} className={editorStyles.userImage}>{userData.name}</Avatar>
            <Typography variant="subtitle1" className={editorStyles.userName}>{userData.username}</Typography>
        </Stack>
    )
}

function EditorPage() {
    const editorStyles = editorStyle();
    const [clients,setClients] = useState([
        {sockeID: 1 , username : "Sushil J"},
        {sockeID: 2 , username : "John Doe"},
    ])
    return(
        <Container maxWidth="lg" className={editorStyles.editorContainer}>
            <Stack direction="row">
                <Box component="div" className={editorStyles.aside}>
                    <Box component="h6" variant="h6" className={editorStyles.contentText}>
                        {'connected'}
                    </Box>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">

                        {
                            clients.map((item)=> {
                                return(
                                  <Client key={item.sockeID} userData={item} classesPro={editorStyles}></Client>
                                )
                            })
                        }
                    </Stack>
                    <Box component="div" className={editorStyles.bottomAside}>
                        <Stack direction="column" spacing={2} className={editorStyles.bottomButtonWrapper}>
                            <Button variant="contained" color="success">Copy Room ID</Button>
                            <Button variant="contained" color="error">Leave</Button>
                        </Stack>
                    </Box>
                </Box>
                <Box component="div" className={editorStyles.editorWrapper}>
                    <Editor></Editor>
                </Box>
            </Stack>
        </Container>
    )
}

export default EditorPage;
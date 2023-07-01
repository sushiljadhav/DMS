import { makeStyles } from "@mui/styles";

export const editorStyle = makeStyles((theme) => ({
    editorContainer : {
        padding:"0 !important",
        maxWidth:"100% !important",
    },
    aside: {
        maxWidth : "300px !important",
        width:'100% !important',
        backgroundColor: "#161616",
        boxShadow : '17px 19px 10px rgba(0, 0, 0, 0.03)',
        padding : '17px',
        height:'100vh',
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 auto',
    },
    contentText : {
        fontSize: '18px',
        lineHeight: '22px',
        marginBottom: '20px',
        textTransform: 'capitalize',
        color:theme.palette.primary.default,
    },
    userImage: {
        marginBottom:"10px",
    },
    userName : {
        fontSize: '18px',
        lineHeight: '22px',
        marginBottom: '20px',
        textTransform: 'capitalize',
        color:theme.palette.primary.default,
    },
    bottomAside : {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        maxWidth: '100%',
        flex: '1 0 auto',
        alignItems: 'flex-end',
        marginBottom: '50px',
    },
    bottomButtonWrapper : {
        maxWidth: '100%',
        width: '100%',
    },
    editorWrapper : {
        backgroundColor:theme.palette.primary.default,
        width: '100%',
    }
    
}))
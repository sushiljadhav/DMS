import { makeStyles } from "@mui/styles";
import theme from "../../theme";


export const loginStyle = makeStyles((theme) => ({
    container: {
        maxWidth : "800px !important",
        width:'100% !important',
        backgroundColor: theme.palette.primary.default,
        boxShadow : '17px 19px 10px rgba(0, 0, 0, 0.03)',
        borderRadius: '20px', 
        padding : '17px',
        marginTop :   '30px'
    },
    leftContainer : {
        background: theme.palette.primary.main,
        borderRadius: '20px',
        maxWidth:'329px',
        width:'100%',
        padding:'63px 27px 40px',
    },
    title : {
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '24px',
        color: theme.palette.primary.default,
        marginBottom:"104px"
    },
    heading : {
        fontWeight: '600',
        fontSize: '40px',
        lineHeight: '48px',
        color: theme.palette.primary.default,
        maxWidth:'304px',
        width:'100%',
        marginBottom:'32px',
    },
    subheading : {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '21px',
        color: '#FFFFFF',
        marginBottom:"111px",
    },
    bottomSlider : {
        maxWidth:'313px',
        width:'100%',
        margin : '0 auto',
        backgroundColor : theme.palette.secondary.main,
        padding : '18px',
        borderRadius : '11PX',
        color : theme.palette.primary.default,
    },
    sliderHeading : {
        fontWeight: '400',
        fontSize: '15px',
        lineHeight: '132.52%',
        color: '#F2EFEF',
        marginBottom : '26px'
    },
    sliderUsername : {
        fontWeight: '700',
        fontSize: '15px',
        lineHeight: '132.52%',
        color: '#E8D2D2',
        marginBottom:'7px'
    },
    sliderUserJob : {
        fontWeight: '500',
        fontSize: '13px',
        lineHeight: '132.52%',
        color: '#E8D2D2',
    },
    rightContainer : {
        padding : '73px 30px 45px 0', 
    },
    signInText : {
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '29px',
        color: '#000000',
        marginBottom:'11px',
    },
    signInSubText : {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '25px',
        color: '#6D6D6D',
        marginBottom:"20px",
    },
    createLink: {
        textTransform:"lowercase !important"
    },
    signInBottomText : {
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#6D6D6D',
        marginTop:"20px",
    },
    formWrapper : {
        maxWidth:'463px',
        width : '100%'
    },
    formInputBinder : {
        marginBottom : '20px'
    },
    button : {
        maxWidth:'100%',
        width:'100%',
        height:'47px',   
    },
    formButtonBinder : {
        margin : "20px 0 0"
    }
}));
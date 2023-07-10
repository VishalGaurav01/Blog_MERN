import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({

    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        // width:'100%',
        height: 480,
        '& > *': {
            padding: '0 5px 15px 5px'
        }  
        },
        image: {
            width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        height: 290
        },
        textColor: {
            color: '#878787',
            fontSize: 18
        },
        heading: {
            fontSize: 21,
            fontWeight: 600
        },
        detail: {
            fontSize: 18,
            wordBreak: 'break-word'
        }
    
})


const Post = () => {
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';


    return (
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image} />
            <Typography className={classes.textColor}>Music</Typography>
            <Typography className={classes.heading} >Anurag For Interview</Typography>
            <Typography className={classes.textColor}>Author: Anurag</Typography>
            <Typography className={classes.detail}>Hi from Anurag</Typography>
        </Box>
    )
}

export default Post;
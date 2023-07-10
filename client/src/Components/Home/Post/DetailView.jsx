import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import {Edit,Delete} from '@material-ui/icons';
import { Link } from "react-router-dom";
const useStyle=makeStyles((theme)=>({
    image:{
width:'100%',
        height:'50vh',
        objectFit:'cover'
    },
    container:{
        padding:'0 100px',
        [theme.breakpoints.down('md')]:{
            padding :0
        },
    },
    icons:{
        float:'right'
    },
    icon:{
        margin:4,
        padding:5,
        border:"1px solid #878787",
        borderRadius:10
    },
    heading:{
        fontSize:38,
        fontWeight:600,
        textAlign:'center',
        margin:'50px 0 10px 0'
    },
    subheading:{
        display:'flex'
        ,color:'silver',
        margin:20,
        [theme.breakpoints.down('sm')]:{
          display:'block'
        },
    },
    date:{
        marginLeft:'auto'
    },
    author:{
        fontWeight:550
    },
    content:{
        border:"0.1px solid #878787",
        borderRadius:10,
        padding: 15
    }
}))
const DetailView = () => {
        const url="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
        const classes=useStyle();
    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image}/>
            <Box className={classes.icons}>
                <Link to="/update"><Edit  className={classes.icon} color='action'/></Link>
                <Delete className={classes.icon} color='action'/>
            </Box>
            <Typography className={classes.heading}>Title of Blog</Typography>
            <Box className={classes.subheading}>
                <Typography className={classes.author}>Author: Anurag Roshan</Typography>
                <Typography className={classes.date} >10-june-2001</Typography>
            </Box>
           <Box className={classes.content}> <Typography>This is a blog from code for Anurag. This is a blog from code for Anurag . This is a blog from code for Anurag.This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. This is a blog from code for Anurag. v</Typography>
        </Box>
        </Box>

    )
}

export default DetailView
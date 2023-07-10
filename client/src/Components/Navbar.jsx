
import { AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component: {
        background: '#ffffff',
        color: 'grey'
    },
    container: {
        padding: 29,
        justifyContent: 'center'
        , '&>*': {
            padding: 20
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }

})
const Navbar = () => {
    const classes = useStyles();
    return (

        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
               <Link to='/' className={classes.link}> <Typography>HOME</Typography></Link>
                <Typography  className={classes.link}>ABOUT</Typography>
                <Typography  className={classes.link}>CONTACT</Typography>
                <Typography  className={classes.link}>LOGIN</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar


// The App Bar displays information and actions relating to the current screen.
// The top App Bar provides content and actions related to the current screen.
//  It's used for branding, screen titles, navigation, and actions.

// The Toolbar component simply applies the normal CSS flex(display: ‘flex’),
// with vertical centering via alignItems: ‘center’, some padding, and the
//  minHeight: 56px provided by the theme.mixins.toolbar.

// Typography is a Material-UI component used to standardize the text and its 
// related CSS properties without worrying about browser compatibility issues.
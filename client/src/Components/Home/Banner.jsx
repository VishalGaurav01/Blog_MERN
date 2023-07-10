import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/100% repeat-x #000`,
        height: '83vh',
        display: 'flex',
        flexDirection: 'column',
        // align:'self',
        // flex:'end',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& :first-child': {
            fontSize: 70,
            color: '#00FF99',

            lineHeight: 1,
            padding:12
        },
        '& :last-child': {
            fontSize: 20,
            color: '#00FF99',
            // background: '#FFFFFF',

            paddingBottom:12,
        }
    }
})

const Banner = () => {
    const classes = useStyle();

    return (
        <>
            <Box className={classes.image}>
                <Typography>BLOG</Typography>
                <Typography>Blog For All</Typography>
            </Box>
        </>
    )
}

export default Banner;


// The Box component serves as a wrapper component for most of the CSS utility needs.
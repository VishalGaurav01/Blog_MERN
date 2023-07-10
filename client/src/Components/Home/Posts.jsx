
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
//components
import Post from './Post';

const Posts = () => {
    // const [posts, getPosts] = useState([]);
    // const { search } = useLocation();

    // useEffect(() => {
    //     const fetchData = async () => { 
    //         let data = await getAllPosts(search); // params in url
    //         getPosts(data);
    //     }
    //     fetchData();
    // }, [search]);

    let posts=[1,2,3,4,5,6,7,8,9,10,11,12];

    return (

            posts.map(post=>(
                <Grid item lg={12} sm={6}  xs={12}>
                    <Link to={'/detail'} style={{textDecoration:"none",color:'inherit'}}>
                    <Post/>
                    </Link>
                </Grid>

            ))
               
            

    )
}

export default Posts;   
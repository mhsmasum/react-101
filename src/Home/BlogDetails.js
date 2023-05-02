import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = ({blogTitle}) => {
    
    console.log(blogTitle);
    const {id} = useParams();
    const {data:blog , isLoadding , error} = useFetch('http://localhost:8000/blogs/'+id);
    
    return ( 

        <div className="blogdetails">
             {/* <h2>{ blog.title}</h2> */}
            { isLoadding &&  <div>Loading</div>}
            { error &&  <div>{error}</div>}
            {blog && (
               
                <article>
                   <h3> {blog.title} </h3>
                   <p> {blog.body} </p>
                </article>
            )}
           
        </div>
     );
}
 
export default BlogDetails;
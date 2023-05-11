import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = ({blogTitle}) => {
    
    console.log(blogTitle);
    const {id} = useParams();
    const {data:blog , isLoading , error} = useFetch('http://localhost:8000/blogs/'+id);
    console.log('is' , isLoading);
    return ( 

        <div className="blogdetails">
     
             <p>{isLoading}</p>
            { isLoading &&  <div>Loading</div>}
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
import {useState , useEffect} from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // const handleClick = () => {
    //     console.log("Handle Click Function");
    //     setCounter(1);
        
    // };

    
    
    // const handleClickAgain = (name)=>{
    //     console.log(name);
    // };

    // const [counter , setCounter] = useState(0);


    // const [blogs  , setBlogs] = useState(null);
    // const [isLoading , setIsLoading] = useState(true);
    // const [error , setError] = useState(null);


    const {data , isLoading , error} = useFetch('http://localhost:8000/blogs');
     
    // const handleDelete = (id)=>{
    //     debugger;
    //     const newBlogs = blogs.filter(a=>a.id!=id);
    //     setBlogs(newBlogs);
    // }
    
    // useEffect( ()=>{

    //     debugger;

    //    setTimeout( () =>{
    //     fetch('http://localhost:8000/blogs').then( res =>{
    //     if(!res.ok){
    //         throw Error("Could not featch data ");

    //     }
    //     return res.json();

    //    }).then( data=>{
    //         setBlogs(data);
    //         setIsLoading(false);
    //         setError(null);
    //    }).catch ((err)=>{
    //     console.log(err.message);
    //     setError(err.message);
    //     setIsLoading(false);
    //    })
    //    },1000)
    // }  , []);
    
    return ( 
        <div className="home">
            {/* <h1>{counter}</h1>
            <button onClick={handleClick}>Chick me</button>
            <button onClick={ ()=>{
                handleClickAgain('masum')
            }}>Click Me Again</button> */}
        {isLoading  && <div>Loading</div> } 
        {error  && <div>{error}</div> } 
         {data && !error && <BlogList blogs={data} title ='All Blogs'></BlogList>}
         {/* <BlogList blogs={blogs.filter(a=>a.auther=='Auther 3')} title ='Auther 3 blog'  ></BlogList> */}
        </div>
     );
}
 
export default Home;
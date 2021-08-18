import { Link } from "react-router-dom";
import beautiful from "./assets/blog/21.jpg"
import useFetch from "./useeffect";
const BlogList = ({blogs}) => {

    const baseUrl = "https://localhost:8000";
    

    return ( 
        <section className="home">
            <div className="container">
                <div className="row justify-content-center mt-5 pt-5 ">
                          {blogs.map((blog) =>(
                                <div className="col-lg-4 col-md-4 mt-3 pt-2" ke={blog.slug}>
                                <div className="post-card">
                                   <div className="card-image text-center ">
                                       <img src={blog.media} alt="blog-post" width="100%" />
                                   </div>
                                   <div className="card-content">
                                       <div className="content-category">
                                           <span>{blog.category}</span>
                                       </div>
                                       <Link to ={`/blog/${blog.slug}`}>
                                       <div className="card-title">
                                           <h6>{blog.title}</h6>
                                       </div>
                                       <div className="content-highlight">
                                           <p>Infinix smart 3 plus beats the massive iphone 12 and the ever gallant samsung galaxy s31
                                               it was so easy.....
                                           </p>
                                       </div>
                                       <div className="author">
                                           <img src={blog.media} alt="author" width="15%" className="rounded-circle" />
                                           <span>{blog.author}</span>
                                           | <span>{blog.date}</span>
                                       </div>
                                       </Link>
                                       
                                   </div>
                               </div>
                           </div>
       
                          ))} 
            
                </div>
            </div>
        </section>
     );
}
 
export default BlogList;



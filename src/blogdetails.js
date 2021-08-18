import useFetch from "./useeffect";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

const Post = () => {
    const { slug } = useParams();
    const {data:blog ,error, isPending} = useFetch('http://localhost:8000/api/blog/view-post/' + slug);
    const history = useHistory();
    return ( 
        <section className="blog-post">
            <div className="container">
            { isPending && <div> Loading... </div>}
            {error && <div>{error}</div>}
            <div className="row justify-content-center mt-5 pt-5 ">
            {blog && (
             <div className="col-lg-8 col-md-8">
             <div className="single-card">
             <div className="post-image ">
                 <img src={blog.media} alt="blog-post" width="100%" />
             </div>
             <div className="post-content">
                 <div className="content-category">
                     <span>{blog.category}</span>
                 </div>
                 <div className="post-title">
                     <h2>{blog.title}</h2>
                 </div>
                 <div className="post-author">
                     <img src={blog.media} alt="author-image" width="10%" className="rounded-circle"/>
                     <i className="fa fa-dot-circle-o"></i>
                     <span>{blog.author}</span>

                     <i className="fa fa-dot-circle-o"></i>
                     <span>{blog.date}</span>
                     <i className="fa fa-dot-circle-o"></i>
                     <span>comments</span>
                 </div>
                 <div className="post-words">
                     {blog.post}
                 </div>

             </div>
             </div>
             </div>
             )}

            <div className="col-lg-4 col-md-4 mt-3 pt-1 text-center ">
             
                    {blog && (
                           <div className="author-details">
                         <img src={blog.media} alt="author-image" width="100%" className="rounded-img"/>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                              <div className="socials">
                                  <i className="fa fa-facebook"></i>
                                  <i className="fa fa-instagram"></i>
                                  <i className="fa fa-twitter"></i>
                                  <i className="fa fa-github"></i>
                              </div>
                            </div>

                    )}
                   
               
            </div>


            </div>
                
    </div>
        
   
        </section>
     );
}
 
export default Post;
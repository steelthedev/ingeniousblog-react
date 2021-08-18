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
                <div className="col-lg-7 col-md-7">
                <div className="post-card">
                <div className="card-image text-center ">
                    <img src={blog.media} alt="blog-post" width="100%" />
                </div>
                <div className="card-content">
                    <div className="content-category">
                        <span>{blog.category}</span>
                    </div>
                    <a href="/">
                    <div className="card-title">
                        <h6>{blog.title}</h6>
                    </div>
                    </a>
                </div>
                </div>
        </div>
    </div>
        
   
        </section>
     );
}
 
export default Post;
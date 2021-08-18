import BlogList from "./bloglist";
import useFetch from "./useeffect";

const Home = () => {
    const {data, isPending , error} = useFetch('http://localhost:8000/api/blog');
    return ( 
        <section className="home">
            <div className="row justify-content-center">

            {error && <div className="col-lg-8 col-md-12 text-center">{error}</div> }
            {isPending && <div className="col-lg-12 mt-5 pt-5">Loading......</div>}
            { data && <BlogList blogs={data} />}

            </div>
        </section>
     );
}
 
export default Home;

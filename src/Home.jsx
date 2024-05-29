import BlogList from "./BlogList";
import useFetch from "./useFetch";

//parent component
const Home = () => {
  const {data:blog, ispending, error} = useFetch("http://localhost:8000/blogs/")
  console.log(blog);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {ispending && <div>Loading...</div>}
      {/* child component  */}
      {blog && <BlogList blog={blog} title="All Blogs!"/>}
      {console.log(blog)}
    </div>
  );
};

export default Home;

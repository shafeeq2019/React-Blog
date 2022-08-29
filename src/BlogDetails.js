import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);

	const handleClick = async () => {
		await fetch(`http://localhost:8000/blogs/${id}`, { method: 'DELETE' }).then(() => {
			navigate("/", { replace: true });
		})
	}

	return (
		<div>
			<div className="blog-details">
				{isLoading && <div>Loading..</div>}
				{error && <div>Error: {error} </div>}
				{
					blog && <article>
						<h2>{blog.title}</h2>
						<p>written by {blog.author}</p>
						<div>{blog.body}</div>
						<button className="functional-button" onClick={handleClick}>Delete</button>
					</article>
				}
			</div>
		</div>
	);
}

export default BlogDetails;
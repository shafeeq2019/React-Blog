import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const BlogList = ({ blogs, title }) => {
	const testFunc = (e, blogBody) => {
		console.log(e);
	}

	return (
		<div className="blog-list">
			<h1>{title}</h1>
			{
				blogs.map(b => {
					return (
						<div className="blog-preview" key={b.id} onClick={(e) => {
							testFunc(e, b.body);
						}}>
							<Link to={`/blogs/${b.id}`} style={
								{ textDecoration: "none" }
							}>
								<h2>{b.title}</h2>
								<p>written by {b.author}</p>
							</Link>
						</div>
					)
				})
			}
		</div>
	);
}

export default BlogList;
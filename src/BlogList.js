import { useNavigate, useParams } from 'react-router-dom';
const BlogList = ({ blogs, title, parentCallback }) => {
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
							<h2>{b.title}</h2>
							<p>written by {b.author}</p>
							<button className="delete-button" onClick={async () => {
								await fetch(`http://localhost:8000/blogs/${b.id}`, {method: "delete"});
								parentCallback();
							}}>delete blog</button>
						</div>
					)
				})
			}
		</div>
	);
}

export default BlogList;
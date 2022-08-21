const BlogList = ({ blogs, title, handleDelete }) => {
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
							<button className="delete-button" onClick={() => {
								handleDelete(b.id);
							}}>delete blog</button>
						</div>
					)
				})
			}
		</div>
	);
}

export default BlogList;
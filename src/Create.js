import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Shafeeq');
	const [isLoading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const blog = { title, body, author }
		setLoading(true);
		await fetch(" http://localhost:8000/blogs", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog)
		})
			.then(() => {
				setLoading(false);
				console.log("New Blog added");
				navigate("/", { replace: true });
			});
	}


	return (
		<div className="create">
			<h2>Add a new blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Blog author</label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="shafeeq">shafeeq</option>
					<option value="Yasser">Yasser</option>
					<option value="Omar">Omar</option>
				</select>
				{!isLoading && <button className="functional-button">Add Blog</button>}
				{isLoading && <button disabled className="functional-button">Adding Blog ..</button>}
			</form>
		</div>
	);
}

export default Create
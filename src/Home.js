/*
onClick = {handleClick()} : involks the function
onClick = {handleClick} : set a referance to the function
onClick = {
	() => {
		handleClick(var); 
	} 
} : using anonymous function to set a reference to a function with param
 */
import { useState, useEffect } from 'react'; //useState hook to provide reactive value with its setter
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchData().then((data) => {
			setIsLoading(false);
			setBlogs(data);
		})
	}, [])

	const fetchData = async () => {
		const res = await fetch('http://localhost:8000/blogs');
		return res.json();
	}

	const handleDelete = (id) => {
		setBlogs(blogs.filter(b => b.id !== id));
	}

	//condetional templation in React 
	return (
		<div className="content">
			{isLoading && <div>Loading..</div>}
			{blogs && <BlogList blogs={blogs} title={"All Blogs!"} handleDelete={handleDelete}></BlogList>}
		</div>
	);
}

export default Home;
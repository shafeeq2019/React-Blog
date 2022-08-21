/*
onClick = {handleClick()} : involks the function
onClick = {handleClick} : set a referance to the function
onClick = {
	() => {
		handleClick(var); 
	} 
} : using anonymous function to set a reference to a function with param
 */
import { useState } from 'react'; //useState hook to provide reactive value with its setter
import BlogList from './BlogList';
const data = require('./data.json');

const Home = () => {
	const [blogs, setBlogs] = useState(data);

	const handleDelete = (id) => {
		setBlogs(blogs.filter(b => b.id !== id));
	}

	return (
		<div className="content">
			<BlogList blogs={blogs} title={"All Blogs!"} handleDelete={handleDelete}></BlogList>
		</div>
	);
}

export default Home;
/*
onClick = {handleClick()} : involks the function
onClick = {handleClick} : set a referance to the function
onClick = {
	() => {
		handleClick(var); 
	} 
} : using anonymous function to set a reference to a function with param
 */

import BlogList from './BlogList';
import useFetch from './useFetch.js';

const Home = () => {
	const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

	//condetional templation in React 
	return (
		<div className="home">
			{isLoading && <div>Loading..</div>}
			{error && <div>Error: {error} </div>}
			{blogs && <BlogList blogs={blogs} title={blogs.length > 0 ? "All Blogs!" : "There is no blogs!"} ></BlogList>}
		</div>
	);
}

export default Home;
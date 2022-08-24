/*
onClick = {handleClick()} : involks the function
onClick = {handleClick} : set a referance to the function
onClick = {
	() => {
		handleClick(var); 
	} 
} : using anonymous function to set a reference to a function with param
 */

import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch.js';

const Home = () => {
	const [trigger, setTrigger] = useState(false);
	const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs", trigger);

	//condetional templation in React 
	return (
		<div className="content">
			{isLoading && <div>Loading..</div>}
			{error && <div>Error: {error} </div>}
			{blogs && <BlogList blogs={blogs} title={blogs.length > 0 ? "All Blogs!" : "There is no blogs!"} parentCallback={() => {
				setTrigger(!trigger);
			}}></BlogList>}
		</div>
	);
}

export default Home;
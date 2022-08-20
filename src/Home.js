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
const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
	]);
	return (
		<div className="content">
			{
				blogs.map(b => {
					return (
					<div className="blog-preview" key={b.id}>
						<h2>{b.title}</h2>
						<p>written by {b.author}</p>
						</div>
					)
				})
			}

		</div>
	);
}

export default Home;
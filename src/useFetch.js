import { useState, useEffect } from 'react'; //useState hook to provide reactive value with its setter

// this is a custom hook
// custom hooks need to start with the word "use"
const useFetch = (url) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();

	/*
	useEffect hook runs a function every render of the components.
	The component renders initially when it first loads and it also happens when the state changes.
	*/
	useEffect(() => {
		fetchData(url)
			.then((res) => {
				setIsLoading(false);
				setError(null);
				setData(res);
			})
			.catch(e => {
				setIsLoading(false);
				setError(e.message);
			});
	}, [url]);

	return { data, isLoading, error };
}

const fetchData = async (url) => {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error("could not fetch the data for the resource!");
		};
		return res.json();
	} catch (error) {
		throw error;
	}
}
export default useFetch;

import Navbar from './Navbar.js';
import Home from './Home.js';
import Create from './Create.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*
<Routes></Routes> is the elment that surround all of the routes and it there to make sure that only 
one route component shows in the browser at any one time
*/

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar/>
				<Routes>
					<Route exact path='/' element={<Home></Home>}></Route>
					<Route exact path='/create' element={<Create></Create>}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

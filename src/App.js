import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Error from "./Page/404";
import Blog from "./Page/Blog";
import Main from "./Page/Main";

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='blog' element={<Blog />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

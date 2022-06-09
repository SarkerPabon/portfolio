import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Hero />
			<About />
			<Skills />
		</BrowserRouter>
	);
}

export default App;

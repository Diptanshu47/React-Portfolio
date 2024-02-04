import {motion, useScroll, useSpring} from "framer-motion";
import style from "./index.css?inline";
import Navbar from "./Components/Navs/Navbar.jsx";
import Home from "./Pages/Home";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Skills from "./Pages/Skills.jsx";
import Projects from "./Pages/Projects.jsx";
import React, { useState } from "react";

export const Context = React.createContext();

function App() {
	const {scrollYProgress} = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const [dark, setdark] = useState(0);

	return (
		<Context.Provider value={[dark, setdark]}>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<motion.div className="progress-bar" style={{scaleX}} />
		</Context.Provider>
	);
}

export default App;

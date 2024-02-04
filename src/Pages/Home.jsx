import React, { useContext } from "react";
import {motion, useTransform, useScroll} from "framer-motion";
import { Context } from "../App";

const Home = () => {
 
	const [dark, setdark] = useContext(Context);

	const containerVariants = {
		hidden: {opacity: 0},
		visible: {opacity: 1, transition: {staggerChildren: 0.3}},
	};

	const itemVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {opacity: 1, y: 0},
	};

	const {scrollY} = useScroll();
	const y = useTransform(scrollY, [0, window.innerHeight], [0, -window.innerHeight]);

	return (
		<motion.div id="home" style={{y}} className="text-center h-screen pt-32 sm:h-auto sm:w-10/12 sm:m-auto sm:pt-28 md:h-screen">
			<div className="w-8/12 inline-flex m-auto sm:block sm:w-full">
				<div className="text-8xl text-left sm:text-6xl sm:text-center sm:mr-0 md:text-7xl">
					<motion.h1 className={`text-center mb-52 sm:mb-10 md:mb-2 ${dark && 'darktitle'}`} variants={containerVariants} initial="hidden" animate="visible">
						<motion.span variants={itemVariants}>Hello </motion.span>
						<motion.span variants={itemVariants}>I am </motion.span>
						<motion.span variants={itemVariants} className={dark ? "darkname sm:text-white" : "text-white sm:text-black"}>
							Diptanshu
						</motion.span>
					</motion.h1>
				</div>
			</div>
		</motion.div>
	);
};

export default Home;

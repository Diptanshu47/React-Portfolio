import React, { useContext } from "react";
import {motion} from "framer-motion";
import MobileRes from "../Components/MobileRes";
import data from "../../data/Data.json";
import divider from "../public/Lightmode/divider.png"
import { Context } from "../App";

const About = () => {

	const [dark, setdark] = useContext(Context);

	const mob = MobileRes();
	const viewport = document.documentElement.clientWidth;

	const cardVariants = {
		offscreen: {y: 180},
		onscreen: {
			y: 50,
			opacity: "100%",
			transition: {type: "tween", duration: 0.8},
		},
	};

	return (
		<motion.div
			id="about"
			style={mob.width>1000&mob.width<1200 ? { height:'auto' } : {}}
			className="h-full text-center pt-20 sm:h-auto sm:pt-10 sm:mt-6"
			initial={viewport < 600 ? {opacity: 0, y: -40} : "offscreen"}
			whileInView={viewport < 600 ? "" : "onscreen"}
			animate={viewport < 600 ? {opacity: 1, y: 0, transition: {duration: 1.6}} : ""}
			exit={viewport < 600 ? {opacity: 0, transition: {duration: 0.5}} : ""}
			viewport={{once: true, amount: 0.8}}
		>
			<div 
			style={mob.width>1000&mob.width<1200 ? { width:'90%',display : "block" } : {width : ''}}
			className="w-8/12 m-auto h-full sm:h-auto sm:w-10/12 md:w-[60%] md:grid ">
				<div 
				style={mob.width>1000 ? { width:'33.333333%' } : {width : ''}}
				className="w-4/12 float-left mr-5 sm:float-none sm:w-full md:m-auto md:w-8/12">
					<img className={`shadow w-10/12 rounded-xl p-3 m-auto border-solid border-2 border-r-4 border-b-4 ${dark ? `border-white` : `border-black`}`} src="src\public\Images\dp.jpg" />
				</div>
				<motion.div id="aboutsection" className="text-left m-auto md:pt-16 sm:pt-32 sm:text-left" variants={cardVariants}>
					<h1 className="mb-10 text-xl sm:mb-2 sm:text-center">About Me</h1>
					<h1 className="font-extrabold text-6xl mb-10">Gir Diptanshu</h1>						
					<p className="text-base sm:h-full">{data.details.des}</p>
				</motion.div>
				<div className="my-32 sm:my-8">
					<img className={`h-40 mx-[50%] ${dark && `border-r-2 border-gray-600`}`} src={divider} />
				</div>
			</div>
		</motion.div>
	);
};

export default About;

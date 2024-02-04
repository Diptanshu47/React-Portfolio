import React from "react";
import {motion} from "framer-motion";

const Contactlinks = (props) => {
	const {alt, icon, link} = props;

	return (
		<motion.button 
			className="w-28 h-32 m-8 sm:w-20 sm:h-20 sm:m-6" 
			whileHover={{scale: 1.2}} 
			whileTap={{scale: 0.9}} 
			transition={{type: "spring", stiffness: 400, damping: 17}}
		>
			<a target="_blank" href={link}>
				<img title={alt} alt={alt} src={icon} />
			</a>
		</motion.button>
	);
};

export default Contactlinks;

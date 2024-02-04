import React from "react";
import {motion} from "framer-motion";

function Navigs(props) {
	const {link, linkname , stylez} = props;
	return (
		<motion.a href={link}>
			<motion.button 
			whileHover={{scale: 1.1}} 
			whileTap={{scale: 0.9}} 
			transition={{type: "spring", stiffness: 400, damping: 10}} 
			className={stylez}
			>
				{linkname}
			</motion.button>
		</motion.a>
	);
}

export default Navigs;

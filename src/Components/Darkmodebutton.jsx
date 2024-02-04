import React, {useContext, useEffect, useState} from "react";
import {motion} from "framer-motion";
import sun from "../public/Darkmode/sun.png"
import { Context } from "../App";

const Darkmodebutton = (props) => {
	const {stylebutton, styleimg} = props;

	const [dark, setdark] = useContext(Context);
	const [anime, setanime] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setanime(1);
		}, "500");
		setanime(0);
	}, [dark]);

	if (dark) {
		document.getElementsByTagName("body")[0].className = "dark";
	} else {
		document.getElementsByTagName("body")[0].className = "light";
	}

	return (
		<button
			onClick={() => {
				dark ? setdark(0) : setdark(1);
			}}
			className={stylebutton}
		>
			<motion.img
				className={styleimg}
				src={dark ? sun : "https://cdn-icons-png.flaticon.com/128/4489/4489231.png"}
				whileHover={{scale: 1.1}}
				whileTap={{scale: 0.9}}
				transition={{type: "spring", stiffness: 400, damping: 17}}
				animate={
					anime && {
						rotate: [45, 0],
					}
				}
			/>
		</button>
	);
};

export default Darkmodebutton;

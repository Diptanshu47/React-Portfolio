import React, {useContext, useEffect, useState} from "react";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import Navigs from "./Navigs";
import Mobnav from "./Mobnav"
import MobileRes from "../MobileRes";
import Darkmodebutton from "../Darkmodebutton";
import { Context } from "../../App";

const Navbar = () => {

	
	const [dark, setdark] = useContext(Context);

	useEffect(()=>{
		if(dark && mob.width < 900){
			const element = document.querySelector(".checkpoint");
			element.classList.remove("shadow");
		}
	},[dark])

	const mob = MobileRes();
	const {scrollY} = useScroll();
	const [collapse, setcollapse] = useState(1);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 350) {
			setcollapse(0);
		}
		if (latest && previous <= 680) {
			setcollapse(1);
		}
		if (window.screen.width < 900) {
			setcollapse(1);
		}
	});

	return (
		<motion.nav
			layout="position"
			className={`checkpoint ${collapse ? `navbar shadow navfull container-lg` : `navbar shadow navcollapse`} ${dark && 'darknav'}`}
			transition={{layout: {type: "spring"}, duration: 0.4, damping: 20, stiffness: 100}}
			onClick={() => {
				setcollapse(1);
			}}
			animate={collapse ? {width: "98.5%", borderRadius: "1.5rem"} : {width: "48px", borderRadius: "5rem"}}
		>
			{collapse ? (
				<div>
					{mob.width < 900 ? (
						<Mobnav />
					) : (
						<ul className="flex text-lg m-2">
							<motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 400, damping: 17}} href="#home">
								<button className="ml-8 hover:font-extrabold">Home</button>
							</motion.a>
							<Navigs stylez="ml-12 hover:text-xl hover:font-extrabold" link="#about" linkname="About" />
							<Navigs stylez="ml-12 hover:text-xl hover:font-extrabold" link="#skills" linkname="Skills" />
							<Navigs stylez="ml-12 hover:text-xl hover:font-extrabold" link="#projects" linkname="Projects" />
							<Navigs stylez="ml-12 hover:text-xl hover:font-extrabold" link="#contact" linkname="Contact" />

							<Darkmodebutton stylebutton={"container inline-flex flex-row-reverse justify-items-end ml-auto my-auto max-w-max"} styleimg={"w-7 mr-4"} />
						</ul>
					)}
				</div>
			) : (
				""
			)}
		</motion.nav>
	);
};

export default Navbar;

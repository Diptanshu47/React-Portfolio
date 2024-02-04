import React, {useContext, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Darkmodebutton from "../Darkmodebutton";
import Navigs from "./Navigs";
import data from '../../../data/Data.json'
import Contactlinks from "../Contact/Contactlinks";
import { Context } from "../../App";

const Navigationbar = () => {
	const [dark, setdark] = useContext(Context);
	const [expand, setexpand] = useState(0);

	return (
		<motion.div>
			<motion.nav className="my-[2px] w-screen flex">
				<motion.button
					animate={expand ? "open" : "close"}
					onClick={() => {
						expand ? setexpand(0) : setexpand(1);
					}}
					className="flex flex-col space-y-[5px] p-[12px] ml-[7.5px]"
				>
					<motion.span variants={{open: {rotate: 45, y: 7}, close: {rotate: 0}}} className={`w-[24px] h-[2.5px] block ${dark ? `bg-white` : `bg-black`}`}></motion.span>
					<motion.span variants={{open: {opacity: 0}, close: {rotate: 0}}} className={`w-[24px] h-[2.5px] block ${dark ? `bg-white` : `bg-black`}`}></motion.span>
					<motion.span variants={{open: {rotate: -45, y: -7}, close: {rotate: 0}}} className={`w-[24px] h-[2.5px] block ${dark ? `bg-white` : `bg-black`}`}></motion.span>
				</motion.button>

				<Darkmodebutton stylebutton={"container inline-flex justify-items-end ml-auto my-auto max-w-max"} styleimg={"w-7 mr-[19.5px]"} />
			</motion.nav>

			<AnimatePresence>
				{expand && (
					<motion.ul
						className={` flex flex-col text-center overflow-hidden ${dark ? `bg-gray-900` : `bg-gray-100`}`}
						initial={{ height : 0 }}
 						animate={{height: "100dvh", opacity: 1}}
						exit={{height : 0}}
						transition={{duration : 0.4}}
						onClick={() => {setexpand(0)}}
					>
						<Navigs stylez="text-[28px] font-semibold my-6 mt-10" link="#home" linkname="Home" />
						<Navigs stylez="text-[28px] font-semibold my-6" link="#aboutsection" linkname="About" />
						<Navigs stylez="text-[28px] font-semibold my-6" link="#skills" linkname="Skills" />
						<Navigs stylez="text-[28px] font-semibold my-6" link="#projects" linkname="Projects" />
						<Navigs stylez="text-[28px] font-semibold my-6" link="#contact" linkname="Contact" />

						<div className="m-auto">
							<Contactlinks alt="github" link={data.socials.git} icon={dark ? "https://logodix.com/logo/64439.png" : data.socailimgs.git} />
						</div>
					</motion.ul>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default Navigationbar;

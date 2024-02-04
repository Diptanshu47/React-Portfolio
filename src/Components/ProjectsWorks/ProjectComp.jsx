import {motion} from "framer-motion";
import MobileRes from "../MobileRes";
import { useContext } from "react";
import { Context } from "../../App";

const ProjectComp = (props) => {
	const [dark, setdark] = useContext(Context);
	const mob = MobileRes();
	const {image, name, stack, content , links , files} = props;

	return (
		<div style={mob.width>800&mob.width<1200 ? { width:'560px',height:"550px" } : {}} 
		className={`shadow w-[420px] h-[470px] border-solid border-2 border-r-4 border-b-4 rounded-2xl sm:h-[500px] ${dark ? `darkproject border-gray-300` : `border-black bg-white`}`}>
			<motion.img className="w-full p-5 mt-2" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "tween", stiffness: 100, damping: 10}} src={image} />
			<div className="mx-4">
				<h1 className={`text-[32px]  font-extrabold sm:text-xxl ${dark ? `darkinfo` : `text-black`}`}>{name}</h1>
				<p className={`mt-4 text-sm sm:text-xl ${dark ? `text-blue-400` : `text-blue-600`}`}>{stack}</p>
				<p className={`mt-4  h-14 text-base sm:text-base ${dark ? `darkinfo` : `text-black`}`}>{content}</p>
				<div className="container inline-flex justify-between my-8">
					<motion.a whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 400, damping: 17}} target="_blank" href={links}>
						<button 
						className={`text-xl underline m-2 sm:text-2xl sm:pt-2 ${dark ? `text-green-400` : ` text-red-500`}`}>visit</button>
					</motion.a>
					<motion.a whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 400, damping: 17}} target="_blank" href={files}>
						<button className="w-8 m-2 sm:w-12">
							<img src={dark ? "https://logodix.com/logo/64439.png" :"https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"} />
						</button>
					</motion.a>
				</div>
			</div>
		</div>
	);
};

export default ProjectComp;

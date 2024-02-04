import {motion, useTransform, useScroll} from "framer-motion";
import {useContext, useEffect, useRef, useState} from "react";
import Projs from "./ProjectComp";
import projdata from "../../../data/Projects.json";
import MobileRes from "../MobileRes";
import { Context } from "../../App";

const HorizontalScrollCarousel = () => {

	const [dark, setdark] = useContext(Context);
	const mob = MobileRes();

	const [how, sethow] = useState(0);
	const [view, setview] = useState(["9.5%", "-69%"]);
	const targetRef = useRef(null);

	useEffect(()=>{
		const {width} = mob;
		if(width<700){
			setview(["1%", "-91.75%"])
		}
		else if(width>700 && width<999){
			setview(["7%","-85%"])
		}
		else if(width>999 && width<1300){
			setview(["7%","-82%"])
		}
		else{
			setview(["9.5%", "-69%"])
		}
	},[mob])
	
	const {scrollYProgress} = useScroll({
		target: targetRef,
	});
	
	let x = useTransform(scrollYProgress, [0, 1], view);

	return (
		<section ref={targetRef} className={`relative h-[300vh] border-solid border-4 border-l-0 border-r-0 ${dark ? `border-gray-500` : `border-black`}`}>
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.div style={{x}} className="flex gap-20">
					<img className={`w-24 h-24 m-auto ${dark && `bg-gray-500 rounded-full`}`} src="https://static.thenounproject.com/png/496877-200.png" />
					{projdata.map((value,index) => {
						return <Projs key={index} name={value.name} content={value.content} image={value.imgs} stack={value.stack} links={value.link} files={value.files}/>;
					})}
					<a
						target="_blank"
						className={`grid place-content-center text-center items-center justify-center border-solid border-2 border-r-4 border-b-4 rounded-2xl ${dark ? `darkproject` : `bg-white border-black`}`}
						onMouseOver={() => {
							sethow(1);
						}}
						onMouseOut={() => {
							sethow(0);
						}}
						href="https://github.com/Diptanshu47?tab=repositories"
					>
						<img className="w-12 m-auto mb-4" src={dark ? "https://logodix.com/logo/64439.png" : "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"} />
						<p>Check out my other projects on GitHub!</p>
						<img
							style={how ? {display: "block"} : {display: "none"}}
							className="w-16 m-auto mt-6"
							src={dark ? "https://cdn-user-icons.flaticon.com/136732/136732225/1707046880747.svg?token=exp=1707047781~hmac=a2e27bd26687501f5dbe1e125beb069a" : "https://dictionary.cambridge.org/images/thumb/arrow_noun_002_01654.jpg?version=5.0.341"}
						/>
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default HorizontalScrollCarousel;

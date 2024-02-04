import {useAnimation, motion} from "framer-motion";
import Links from "../Components/Contact/Links";
import Contactlinks from "../Components/Contact/Contactlinks";
import data from "../../data/Data.json";
import MobileRes from "../Components/MobileRes";
import { useContext } from "react";
import { Context } from "../App";

const Contact = () => {
	const [dark, setdark] = useContext(Context);
	const mob = MobileRes();
	const d = new Date();
	let year = d.getFullYear();

	const controls = useAnimation();

	const squareVariants = {
		hidden: {opacity: 0, y: 40},
		visible: {opacity: 1, y: 0, transition: {duration: 1.2}},
	};

	return (
		<div id="contact" style={mob.width>1000&mob.width<1200 ? { height:'auto',paddingBottom : "75px" } : {height : '100dvh'}} className="h-screen pt-32 sm:pt-20">
			<div className="w-8/12 text-center m-auto md:w-6/12 sm:w-11/12">
				<motion.div className="box" animate={controls} initial="hidden" whileInView="visible" variants={squareVariants}>
					<h1 className="text-6xl font-extrabold">Contact.</h1>
					<p className="mt-10 sm:mb-8">Get in touch with me via social media or email.</p>
				</motion.div>
				<motion.div className="inline-flex flex-wrap sm:w-11/12 sm:m-auto sm:block md:block" whileInView="visible" animate={controls} initial="hidden" variants={squareVariants}>
					<Contactlinks alt="github" link={data.socials.git} icon={dark ? "https://logodix.com/logo/64439.png" : data.socailimgs.git} />
					<Contactlinks alt="linkedin" link={data.socials.linkedin} icon={data.socailimgs.linkedin} />
					<Contactlinks alt="gmail" link={`mailto:${data.socials.mail}`} icon={data.socailimgs.mail} />
					<Contactlinks alt="instagram" link={data.socials.insta} icon={data.socailimgs.insta} />
				</motion.div>
			</div>

			<div className="w-9/12 m-auto mt-24 sm:w-11/12 sm:text-center sm:relative sm:mt-8 sm:h-72 md:w-[90%]">
				<div className="my-2 sm:mb-16">
					<Links about="Resume" link="https://drive.google.com/file/d/1cuPLP7BYbBjGLFjtGSxf9aPVmaiZpK20/view?usp=sharing" style="sm:justify-left container inline-flex"/>
					<Links about="Previous Portfolio" link="https://diptanshu47.github.io/Portfolio/" style="sm:justify-left container inline-flex"/>
				</div>
				<hr className={dark ? "border border-gray-500" : "border border-black"}></hr>
				<div className="container inline-flex sm:block">
					<div className="conatiner mt-2 sm:text-xl">
						<p>Made with ❤️ By Diptanshu</p>
						<h2>© {year}</h2>
					</div>
					<Links
						about="Portfolio Files"
						link=""
						style="container inline-flex flex-row-reverse justify-items-end ml-auto my-auto max-w-max sm:absolute sm:bottom-[53%] sm:left-0 sm:m-auto sm:flex-row"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;

import Skillwheel from "../Components/Skills/SkillWheel";
import Tech from "../Components/Skills/Tech";
import divider from "../public/Lightmode/divider.png"
import MobileRes from "../Components/MobileRes";
import { useContext } from "react";
import { Context } from "../App";

const Skills = () => {

	const [dark, setdark] = useContext(Context);

	const mob = MobileRes();
	return (
			<div id="skills" style={mob.width>800&mob.width<1300 ? { marginTop:'150px',paddingTop:"60px" } : {marginTop : ''}} 
			className="my-20 md:mt-80 sm:mb-8 sm:p-4 sm:mt-0">
			<h1 style={mob.width>800&mob.width<1300 ? {paddingTop : 0} : {}} className="text-center text-5xl font-black pt-32 sm:pt-6 sm:mt-8">Skills.</h1>
			<Tech />
			<Skillwheel />
			<div className="mt-10 mb-4">
				<img className={`mx-[50%] h-40 ${dark && `border-r-2 border-gray-600`}`} src={divider} />
			</div>
		</div>
	);
};

export default Skills;

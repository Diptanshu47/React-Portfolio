import HorizontalScrollCarousel from "../Components/ProjectsWorks/ProjectCarousel";
import { useContext } from "react";
import { Context } from "../App";

const Projects = () => {
	const [dark, setdark] = useContext(Context);
	return (
		<div id="projects" className={`sm:mt-2 md:mt-4 ${dark ? `cursdark` : `curs`}`}>
			<div className="flex h-36 items-center justify-center ">
				<span className="font-semibold pt-10 text-5xl">Projects.</span>
			</div>
			<HorizontalScrollCarousel />
		</div>
	);
};

export default Projects;

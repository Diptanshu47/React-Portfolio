import {useState, useEffect} from "react";
import background from "../public/Images/bg.jpg";

const MobileRes = () => {
	const [mob, setmob] = useState({width: undefined});

	useEffect(() => {
		function handleresize() {
			setmob({width: window.innerWidth});
		}
		window.addEventListener("resize", handleresize);
		handleresize();
		return () => window.removeEventListener("resize", handleresize);
	}, []);

	useEffect(() => {
		let {width} = mob;
		if (width < 600) {
			document.getElementById("root").style.backgroundImage = "none";
		} else {
			document.getElementById("root").style.backgroundImage = `url(${background})`;
		}

		if(width > 1300){
			document.getElementById("root").style.backgroundSize = '100% 100%';
		}
		else{
			document.getElementById("root").style.backgroundSize = 'auto 100%';
		}
	}, [mob]);

	return mob;
};

export default MobileRes;

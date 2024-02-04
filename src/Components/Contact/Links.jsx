import React, { useContext } from "react";
import {motion} from "framer-motion";
import { Context } from "../../App";

const Links = (props) => {
    const [dark, setdark] = useContext(Context);
    const {about , style , link} = props;
	return (
        <button className={style}>
			<a target="_blank" href={link}>
				<motion.img className="w-8 sm:w-10"
                    whileHover={{scale: 1.3}} 
                    whileTap={{scale: 0.9}} 
                    transition={{type: "spring", stiffness: 400, damping: 17}} 
                    src= {dark ? "https://cdn-icons-png.flaticon.com/128/8815/8815166.png" : "https://static.thenounproject.com/png/2472697-200.png"}
                />
			</a>
    		<h1 className="pt-1 sm:pt-2">{about}</h1>
		</button>
	);
};

export default Links;

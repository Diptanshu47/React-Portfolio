import { useEffect } from "react";
import { useAnimation , motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Techstack from "./Techstack";
import data from '../../../data/Data.json';

const Tech = ()=>{
    const {html,css,javascript,bootstrap,tailwind,git,postman,mongodb,express,react,nodejs} = data.tech;
    const squareVariants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
    };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return(
        <motion.div 
            className="square box mt-20 w-10/12 text-center m-auto sm:w-[98%] md:w-[95%]"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.2, 0.3, 0.4, 1]
            }}
        >
            <div className="inline-flex flex-wrap justify-center">
                <Techstack alt="html" img={html} />
                <Techstack alt="css" img={css} />
                <Techstack alt="javascript" img={javascript} />
                <Techstack alt="bootstrap" img={bootstrap} />
                <Techstack alt="tailwind" img={tailwind} />
                <Techstack alt="git" img={git} />
                <Techstack alt="postman" img={postman} />              
                <Techstack alt="mongodb" img={mongodb} />
                <Techstack alt="express" img={express} />
                <Techstack alt="react" img={react} />
                <Techstack alt="nodejs" img={nodejs} />
            </div>
        </motion.div>
    )
}

export default Tech
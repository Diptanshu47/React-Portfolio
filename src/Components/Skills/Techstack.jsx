import { motion } from "framer-motion";

const Techstack = (props)=>{
    const {alt , img} = props;
    return (
        <motion.div 
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}    
        className="m-8 sm:m-[10px] sm:w-24 sm:h-auto">
            <img className="w-28 m-auto sm:w-20" title={alt} alt={alt} src={img} />
        </motion.div>
    )
}

export default Techstack
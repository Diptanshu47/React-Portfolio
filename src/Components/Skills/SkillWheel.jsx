import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children , baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-30, -70, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax h-16">
      <motion.div className="scroller text-5xl font-bold w-max mt-5" style={{ x }}>
        <span className="">{children}</span>
        <span className="">{children}</span>
        <span className="">{children}</span>
        <span className="">{children}</span>
        <span className="">{children}</span>
      </motion.div>
    </div>
  );
}


const Skills = ()=>{

  const viewport = document.documentElement.clientWidth;
  let x = 1.5;

  if(viewport < 600){
     x = 2.5
  }else{
     x = 1.5
  }

    return(
        <section className="mt-20 w-full overflow-hidden">
            <ParallaxText baseVelocity={x}>
                HTML<span className="font-thin">——</span>
                CSS<span className="font-thin">——</span>
                JavaScript<span className="font-thin">——</span>
                JQuery<span className="font-thin">——</span>
                Bootstrap<span className="font-thin">——</span>
                Tailwind<span className="font-thin">——</span>
                ReactJs<span className="font-thin">——</span>
            </ParallaxText>
            <ParallaxText baseVelocity={-x}>
                NodeJs<span className="font-thin">——</span>
                ExpressJs<span className="font-thin">——</span>
                MongoDb<span className="font-thin">——</span>
                Mongoose<span className="font-thin">——</span>
                RestApi<span className="font-thin">——</span>
                API<span className="font-thin">——</span>
                Postman<span className="font-thin">——</span>
                Git<span className="font-thin">——</span>
            </ParallaxText>
        </section>
    )
}

export default Skills
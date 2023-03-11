import React, { useContext } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { NavContext } from "../App";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-black-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	const { handleMouse } = useContext(NavContext);
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2
					onMouseEnter={handleMouse}
					className={`text-effect ${styles.sectionHeadText}`}
					data-value="Overview."
				>
					Overview.
				</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I'm a web developer, passionate about creating high-quality websites
				that are not only visually appealing but also functional and
				user-friendly. With experience in React,Node.js, HTML, CSS, JavaScript,
				and various web development frameworks, I have the skills necessary to
				bring your web project to life. Take a look at my portfolio to see some
				of my previous work and feel free to contact me to discuss your web
				development needs.
			</motion.p>
			<div className="mt-14 flex flex-wrap gap-10 overflow-hidden relative pt-7 pl-4">
				{services.map((service, i) => (
					<ServiceCard key={service.title} index={i} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");

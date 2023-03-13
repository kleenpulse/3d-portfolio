import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const handlePointer = (e) => {
	const blob = document.getElementById("blob");

	const { clientX, clientY } = e;

	blob.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 3000, fill: "forwards" }
	);
};

const SectionWrapper = (Component, idName) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.padding} max-w-7xl mx-auto relative z-0 overflow-hidden`}
			>
				{idName === "projects" || idName === "work" ? (
					<div className="timeline-class"></div>
				) : (
					""
				)}

				<span className="hash-span" id={idName}>
					&nbsp;
				</span>
				<Component />
				{idName === "feedback" && (
					<>
						<div id="blob"></div>
						<div id="blur" onPointerMove={handlePointer}></div>
					</>
				)}
			</motion.section>
		);
	};

SectionWrapper.propTypes = {
	Component: PropTypes.elementType.isRequired,
	idName: PropTypes.string.isRequired,
};
export default SectionWrapper;

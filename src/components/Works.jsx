import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useContext } from "react";
import { NavContext } from "../App";
import { MouseContext } from "../hoc/mouse-context";

const ProjectCard = ({
	index,
	name,
	tags,
	image,
	description,
	live_link,
	source_code_link,
}) => {
	const { handleMouse } = useContext(NavContext);
	const { cursorType, cursorChangeHandler } = useContext(MouseContext);
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 850,
					perspective: 2000,
				}}
				className="rounded-2xl screen flex overflow-hidden z-10 relative"
			>
				<div
					className="screen-image"
					style={{ backgroundImage: `url(${image})` }}
				/>
				<div className="screen-overlay" />
				<div className="screen-content relative flex flex-col justify-between p-5 grow gap-4 z-[3]">
					<div className=" flex inset-0 justify-end m-3 ">
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="bg-black-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							onMouseEnter={() => cursorChangeHandler("link-hover out")}
							onMouseLeave={() => cursorChangeHandler("")}
						>
							<img src={github} alt="git-hub" />
						</div>

						<div
							onClick={() => window.open(live_link, "_blank")}
							className="bg-black-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-1"
							onMouseEnter={() => cursorChangeHandler("link-hover out")}
							onMouseLeave={() => cursorChangeHandler("")}
						>
							<span className="text-[23px] font-bold">↗</span>
						</div>
					</div>

					<div className="mt-5">
						<h3
							className="text-white text-[24px] font-bold uppercase text-effect w-[fit-content]"
							data-value={name}
							onMouseEnter={handleMouse}
						>
							{name}
						</h3>
						<p className="text-[#e8d8fa] mt-2 text-[16px]">{description}</p>
					</div>
					<div className="mt-4 flex flex-wrap gap-2 ">
						{tags.map((tag) => (
							<p key={tag.name} className={`text-[14px] ${tag.color}`}>
								{" "}
								#{tag.name}
							</p>
						))}
					</div>
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	const { handleMouse } = useContext(NavContext);
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>project in the field</p>
				<h2
					className={`text-effect ${styles.sectionHeadText}`}
					onMouseEnter={handleMouse}
					data-value="Projects."
				>
					Projects.
				</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Projects below showcase my skill, experience, and unmatched
					perspicacity through real-world examples of my work. Each project is
					brief described with links to source code and demo links. It reflects
					my ability to solve complex problems, work with different web
					technologies.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7 justify-center">
				{projects.map((project, i) => (
					<ProjectCard key={`project-${i}`} index={i} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "projects");

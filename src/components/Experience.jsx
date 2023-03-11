import { motion } from "framer-motion";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useContext } from "react";
import { NavContext } from "../App";

const ExperienceCard = ({ experience }) => (
	<VerticalTimelineElement
		contentStyle={{
			background: "#090325",
			color: "#c5acf0",
			boxShadow: "0 0 40px rgba(0,0,0,0.3)",
			border: "1px solid #cbb4f6",
		}}
		contentArrowStyle={{ borderRight: "7px solid #2a015c" }}
		date={experience.date}
		iconStyle={{ background: experience.iconBg }}
		icon={
			<div className="flex justify-center items-center w-full h-full">
				<img
					src={experience.icon}
					alt={experience.company_name}
					className="w-[60%] h-[60%] object-contain"
				/>
			</div>
		}
	>
		<div>
			<h3 className="text-[#c5acf0] text-[24px] font-bold">
				{experience.title}
			</h3>
			<p
				className="text-[#c5acf0] text-[16px] font-semibold"
				style={{ margin: 0 }}
			>
				{experience.company_name}
			</p>
		</div>
		<ul className="mt-5 list-disc ml-5 space-y-2">
			{experience.points.map((point, i) => (
				<li
					key={`experience-point-${i}`}
					className="text-[#c5acf0]-100 text-[14px] pl-1 tracking-wider"
				>
					{point}
				</li>
			))}
		</ul>
	</VerticalTimelineElement>
);

const Experience = () => {
	const { handleMouse } = useContext(NavContext);
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I've worked on so far</p>
				<h2
					onMouseEnter={handleMouse}
					className={`text-effect ${styles.sectionHeadText}`}
					data-value="My Xperience"
				>
					My Xperience
				</h2>
			</motion.div>

			<div className="mt-20 flex flex-col relative overflow-hidden">
				<VerticalTimeline>
					{experiences.map((experience, i) => (
						<ExperienceCard experience={experience} key={i} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");

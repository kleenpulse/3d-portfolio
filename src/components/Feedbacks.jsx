import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
	index,
	name,
	company,
	image,
	testimonial,
	designation,
}) => (
	<motion.div
		variants={fadeIn("", "spring", index * 0.5, 0.75)}
		className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
	>
		<p className="text-white font-black text-[48px]">"</p>
		<div className="mt-1">
			<p
				className="text-white tracking-wider text-[18px]"
				dangerouslySetInnerHTML={{ __html: testimonial }}
			/>
			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex flex-1 flex-col">
					<p className="text-white font-medium text=[16px]">
						<span className="blue-text-gradient">@</span>
						{name}
					</p>
					<p className="mt-1 text-secondary text-[12px]">
						{designation} of {company}
					</p>
				</div>
				<img
					src={image}
					alt={`feedback-by-${name}`}
					className="w-10 h-10 rounded-full object-cover"
				/>
			</div>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className="mt-12 rounded-[25px] z-[3] pointer-events-none">
			<div
				className={`${styles.padding}  rounded-2xl min-h-[350px] clip-path z-10 relative`}
			>
				<motion.div variants={textVariant()}>
					<p className={`${styles.heroSubText}`}>What my Clients say</p>
					<h2 className={` ${styles.heroHeadText}`}>Testimonials.</h2>
				</motion.div>
			</div>
			<div
				className={`${styles.paddingX} -mt-28 pb-10 flex flex-wrap gap-7 relative justify-center z-20`}
			>
				{testimonials.map((testimonial, i) => (
					<FeedbackCard key={testimonial.name} index={i} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "feedback");

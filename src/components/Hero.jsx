import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { NavContext } from "../App";

const Hero = () => {
	const { linkCliked, setLinkCliked, handleMouse } = useContext(NavContext);

	if (linkCliked) {
		let clickedLink = document.querySelector("#about-link");
		clickedLink.click();
	}

	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5  h-[fit-content]`}
			>
				<div className="flex flex-col justify-center items-center mt-2">
					<div className="w-5 h-5 rounded-full bg-[#b966f3]" id="small-ball" />
					<div className="w-1 sm:h-[300px] h-40 violet-white" />
				</div>

				<div className="bg-[#0000] z-10">
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm{" "}
						<span
							className="im-vercel text-effect"
							data-value="Vxrcel"
							onMouseEnter={handleMouse}
						>
							Vxrcel
						</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						Creating 3D visually pleasing and functional{" "}
						<br className="sm:block hidden" />
						websites and web Apps is what I do
					</p>
				</div>
			</div>
			<ComputersCanvas />
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a
					href="#about"
					onClick={() => {
						setLinkCliked(true);
					}}
				>
					<div className="w-[35px] h-[64px] rounded-3xl border-[2px] border-[#fff] flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-[#fff] mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;

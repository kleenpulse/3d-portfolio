import { useState, useRef, useContext } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { NavContext } from "../App";
import { MouseContext } from "../hoc/mouse-context";

const Contact = () => {
	const { handleMouse } = useContext(NavContext);
	const { cursorType, cursorChangeHandler } = useContext(MouseContext);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const formRef = useRef(null);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// template_ukmx20k
		// service_j938yp5
		// cBHhtVesZW0jFFA6w
		emailjs
			.send(
				"service_j938yp5",
				"template_ukmx20k",
				{
					from_name: form.name,
					to_name: "Vxrcel",
					from_email: form.email,
					to_email: "skyeparagon@gmail.com",
					message: form.message,
				},
				"cBHhtVesZW0jFFA6w"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you, I will get back to you as soon as possible");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(e) => {
					setLoading(false);
					console.log(e);
					alert("Something went wrong");
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-200 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3
					onMouseEnter={handleMouse}
					className={`${styles.sectionHeadText} im-vercel text-effect`}
					data-value="Contact."
				>
					Contact.
				</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label htmlFor="" className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Your name..."
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							required
						/>
					</label>

					<label htmlFor="" className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Your email..."
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							required
						/>
					</label>

					<label htmlFor="" className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="say hello..."
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							required
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-white hover:text-black-200 duration-500"
						onMouseEnter={() => cursorChangeHandler("link-hover")}
						onMouseLeave={() => cursorChangeHandler("")}
					>
						{loading ? "Sending" : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");

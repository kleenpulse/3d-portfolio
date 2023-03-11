import { createContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
	Foobar,
} from "./components";

export const NavContext = createContext();

function App() {
	const [linkCliked, setLinkCliked] = useState(false);
	const letters = "♢♀⌈П∑ㄱㄷÐΨ";
	let interval = null;
	const handleMouse = (name) => {
		let iteration = 0;
		name = name.target;

		clearInterval(interval);
		interval = setInterval(() => {
			name.innerText = name.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return name.dataset.value[index];
					}

					return letters[Math.floor(Math.random() * letters.length)];
				})
				.join("");

			if (iteration >= name.dataset.value.length) {
				clearInterval(interval);
			}

			iteration += 1 / 3;
		}, 50);
	};

	return (
		<Router>
			<NavContext.Provider value={{ linkCliked, setLinkCliked, handleMouse }}>
				<div className="relative z-0 bg-primary">
					<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
						<Navbar />
						<Hero />
					</div>
					<About />
					<Experience />
					<Tech />
					<Works />
					<Feedbacks />
					<div className="relative z-0">
						<Contact />
						<StarsCanvas />
						<Foobar />
					</div>
				</div>
			</NavContext.Provider>
		</Router>
	);
}

export default App;
